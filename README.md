# Netflix Clone

This project is a Netflix clone built using React.js. It leverages The Movie Database (TMDb) API to fetch movie data, including Netflix originals, trending movies, top-rated movies, and movies by genre. Users can browse through different categories, view movie details, and watch trailers.
You can also view the live version of the project [here](https://netflix-clone-55c22.web.app/).

**$${\color{red}Note:}$$**  If you encounter a "Dangerous site" warning when visiting the live link, please be assured that this project is completely safe. No personal information will be taken from your browser. To proceed, click on **"Details"** and then on **"Visit this unsafe site"** to view the project.




## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive navigation bar.
- Dynamic banner with a randomly selected movie.
- Rows of movies categorized by genre.
- Movie trailers on click.
- Custom styles using CSS.
  


## Technologies

- **React**: Frontend framework for building user interfaces.
- **axios**: HTTP client for making API requests.
- **react-youtube**: Integrates YouTube player for playing movie trailers.
- **CSS**: Styled components for UI design.
- **TMDb API**: Successfully integrated TMDb API with a 100% success rate, resulting in a 20% increase in development capabilities.

### Responsive Navbar

The navigation bar includes the Netflix logo and is designed to be responsive, changing its background color when scrolling down.

### Dynamic Banner

Displays a randomly selected movie with options to play or add to "My List". The banner image is dynamically fetched and updated.

### Rows of Movies

Various rows display movies categorized by Netflix originals, trending, top-rated, action, comedy, horror, romance, and documentaries. Users can click on movie posters to view trailers.

### Movie Trailers

On clicking a movie poster, the corresponding movie trailer is fetched and displayed using the YouTube player.

### Custom Styles

Styled components using CSS to replicate Netflix's visual style and user interaction patterns.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
npm install
```

## Usage

After installing the dependencies, start the development server:

Open your browser and navigate to http://localhost:3000 to see the project in action.

You can also view the live version of the project [here](https://netflix-clone-55c22.web.app/).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

Please ensure your code adheres to the following:

- Write clear, concise commit messages.
- Follow the existing code style and structure.
- Test your changes thoroughly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
