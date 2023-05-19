abstract class Global {
}
class Development extends Global {
    public urls = {
        books: 'https://www.googleapis.com/books/v1/volumes?q=',
    }
}
class Production extends Global {
    public urls = {
        books: 'www.clalit-app.com/api/tasks',
    }
}
const urlService = (process.env.NODE_ENV === "production") ? new Production() : new Development();
export default urlService;