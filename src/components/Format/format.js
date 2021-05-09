export const format = (number) => {
    return (
        (number) ? 
        <div style={{ color: "black ", fontSize: 25, backgroundColor: "#ffa90a" }}>
            {new Intl.NumberFormat("ES-AR", {
            style: "currency",
            currency: "ARS"
            }).format(number)}
        </div>
    : null
    );
}