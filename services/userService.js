const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        res.send(data);
    } catch(error) {
        res.send(400)
        console.error(error);
    }
}


exports.GetUser = async (req, res) => {
    try {
        const usuarioId = req.query.user 
        let { data } = await cliente.supabase.from('usuario').select('*').eq('id',usuarioId);
        res.send(data);
    } catch(error) {
        res.send(400)
        console.error(error);
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        const usuarioId = req.query.user 
        await cliente.supabase.from('usuario').delete().eq('id',usuarioId);
        res.send(200);
    } catch(error) {
        res.send(400)
        console.error(error);
    }
}

exports.CreateUser = async (req, res) => {
    try {
        const dataRequest = req.body
        const { data, error } = await cliente.supabase.from('usuario').insert([dataRequest]).select()
        res.send(data);
    } catch(error) {
        res.send(400)
        console.error(error);
    }
}