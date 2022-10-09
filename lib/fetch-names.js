export async function fetchNames() {
    const res = await fetch('http://localhost:8000/api/names')
    const names = await res.json()
    return names;
}