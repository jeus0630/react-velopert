export default function Title({color, name}){
    return (
        <>
            <h1 style={{color}}>Hello {name}!</h1>
        </>
    )
}

Title.defaultProps = {
    name: "이름이 없어요!"
}