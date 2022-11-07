export async function login(body) {
    try {
        let query = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        })

        let data = await query.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function getTransactions(number) {
    try {
        let query = await fetch(`http://localhost:4000/card/${number}/transactions`);
        let data = await query.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function newTransaction(body, number) {
    try {
        let query = await fetch(`http://localhost:4000/card/${number}/newTransaction`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
        let data = await query.json();
        return data
    } catch (error) {
        console.log(error)
    }
}