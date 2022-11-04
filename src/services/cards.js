export async function getTransactions(number) {
    try {
        let query = await fetch(`http://localhost:4000/card/${number}/transactions`);
        let data = await query.json();
        return data
    } catch (error) {
        console.log(error)
    }
}