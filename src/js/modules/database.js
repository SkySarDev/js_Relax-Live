const database = ({ url, method, body }) =>
    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

export default database;
