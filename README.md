# mtaconf

This is a basic vite project with support for TailwindCSS and React.

## Set up dev environment

This assumes [mise](https://github.com/jdx/mise) has been installed.

```
mise exec -- pnpm install
```

## Develop

```
mise exec -- pnpm dev
```

## Deploy

```
mise exec -- pnpm build
mise exec -- pnpm run deploy
```

## Livestream Authentication System

This project includes a secure password-protected livestream system with device limits. See the [scripts/README.md](scripts/README.md) for detailed setup instructions.

### Quick Setup

```bash
# Configure AWS profile
aws configure --profile mta

# Deploy the authentication system
cd scripts/lambda
./deploy.sh

# Set up passwords
mise exec -- pnpm run setup
mise exec -- pnpm run add-password "your_password" "Description"
```
