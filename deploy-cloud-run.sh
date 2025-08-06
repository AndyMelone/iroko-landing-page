#!/bin/bash

# Get package version from package.json
PACKAGE_VERSION=$(node -p "require('./package.json').version")

# Generate tag using package version and current date
DATE_TAG=$(date +"%Y%m%d-%H%M")
TAG="${PACKAGE_VERSION}-${DATE_TAG}"

# Create a GCP-compliant label (lowercase, only letters, numbers, underscores, and dashes)
LABEL_TAG=$(echo "${PACKAGE_VERSION}-${DATE_TAG}" | tr '.' '_' | tr -cd 'a-z0-9_-')

echo "🏷️ Generated tag: $TAG"

# Load environment variables from .env.production file
if [ -f .env.production ]; then
    echo "📝 Loading environment variables from .env.production"
    # Convert .env.production file to format needed for gcloud command
    env_vars=$(grep -v '^#' .env.production | grep '=' | sed 's/^//' | sed 's/$/,/' | tr -d '\n' | sed 's/,$//')

    if [ -z "$env_vars" ]; then
        echo "⚠️ Warning: No environment variables found in .env.production"
    else
        echo "✅ Environment variables loaded successfully"
    fi
else
    echo "❌ Error: .env.production file not found"
    exit 1
fi

# Build the Docker image with the generated tag
echo "🔨 Building Docker image with tag: $TAG"
docker build --platform linux/amd64 -t us-central1-docker.pkg.dev/iroko-468113/iroko/iroko-landing-page:$TAG .

# Push the Docker image
echo "🚀 Pushing Docker image to registry"
docker push us-central1-docker.pkg.dev/iroko-468113/iroko/iroko-landing-page:$TAG

# Deploy to Cloud Run with environment variables from .env.production
echo "🚀 Deploying to Cloud Run with tag: $TAG"

gcloud run deploy iroko-landing-page \
    --project=iroko-468113 \
    --image us-central1-docker.pkg.dev/iroko-468113/iroko/iroko-landing-page:$TAG \
    --region us-central1 \
    --platform managed \
    --allow-unauthenticated \
    --port=3000 \
    --timeout=3600 \
    --set-env-vars "${env_vars}" \
    --update-labels commit-sha=$LABEL_TAG