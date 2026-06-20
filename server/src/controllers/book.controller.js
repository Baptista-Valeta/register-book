
export const createBooks = async (req, res) =>{
    try {        
        if (!req.body) {
            return res.status(400).json({message: "Falta dados para criação"});
        };
        
        const books = req.app.locals.models.books;
        const create_books = await books.create(req.body);

        console.log("Book create",{
            book: create_books
        });

        return res.status(201).json({message: `Livro ${create_books.title} criado`, book: create_books});
    } catch(err) {
        return res.status(500).json({message: "Erro ao criar book", error: err.message});
    }
};


export const getAllBooks = async (req, res) => {
    try {
        const books = req.app.locals.models.books;
        const get_books = await books.findAll();

        if(!get_books) return res.status(404).send("Nenhum livro encontrado!");
        console.log("Registros do banco: ", get_books)

        return res.status(200).json({message: "Todos os livros", books: get_books});
    }catch (err) {}

} 