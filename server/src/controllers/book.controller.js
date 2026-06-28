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

        return res.status(200).json({message: "Lista de livros", books: get_books});
    }catch (err) {}

};

export const updateBooks = async (req, res) => {
    try {
        if(!req.body) return res.status(400).send("Informe os campos a atualizar!");

        const books = req.app.locals.models.books;
        console.log(req.params.id, req.body)
        const update_books = await books.update(req.body, {where: {id: req.params.id}});

        return res.status(200).json({message: `Book atualizado`, books: update_books});
    } catch (err) {
        return res.status(500).json({message: "Erro ao atualizar book: ", error: err.message});
    };
};

export const deleteBooks = async (req, res) => {
    try {
        if(!req.params.id) return res.status(400).send("Informe o id do book");

        const books = req.app.locals.models.books;
        await books.destroy({where: {id: req.params.id}});

        return res.status(200).send("Book deletado!");
    } catch (err) {
        return res.status(500).send({message: "Erro ao deletar book: ", error: err.message});
    }
}