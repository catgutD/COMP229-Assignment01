//contact.controller.server.js Cathy Da 301177731 Sept 30

export function displayContactPage(req, res, next){
    res.render('contact.ejs', {title: 'Contact', page: 'contact'})
};
