# OT-Streaming

This is an Anime streaming platform built with [Next.js](https://nextjs.org) and styled using modern UI components. The platform fetches and displays anime details using the AniList GraphQL API and allows users to view information about various animes, including descriptions, genres, and episodes.

## Features

- Display anime details such as title, description, and genres.
- Episode list with links to watch each episode.
- Dynamic routing for fetching specific anime data.
- Integration with the AniList GraphQL API.
- Responsive design with smooth transitions.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js installed
- Yarn, NPM, PNPM, or Bun as your package manager.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ghalib-craftLeProgrammeur/OT-Streaming-V3.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ot-streaming
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

You can start editing the project by modifying `app/page.tsx`. The page auto-updates when you save your changes. This project also uses `next/font` for automatic font optimization.

## API Integration

This project uses the [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/) to fetch anime data, including descriptions and episode lists.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [AniList API Documentation](https://anilist.gitbook.io/anilist-apiv2-docs/) - Learn how to interact with the AniList GraphQL API.

## Deploy on Vercel

The easiest way to deploy your Next.js application is through [Vercel](https://vercel.com), the creators of Next.js.

1. Sign up on [Vercel](https://vercel.com/signup).
2. Create a new project and connect your repository.
3. Deploy!

For more detailed instructions, check out the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
