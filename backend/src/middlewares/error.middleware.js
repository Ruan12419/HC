module.exports = (err, req, res, next) => {
    console.error(err);
    
     const status = err.status || 500;  // 500 é o padrão
     const message = err.message || 'Algo deu errado.';
 
     if (status === 500) {
         console.error(err); 
     }
 
     res.status(status).json({ message });
  };
  