/**
 * Contains the miscellaneous route handlers.
 * @author Edorh Victoria <https://github.com/Vikitohyah>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
