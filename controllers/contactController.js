export const getContactList = async(req, res, next) => {
    res.status(200).json({ status: 1, message: 'Contact List' });
}