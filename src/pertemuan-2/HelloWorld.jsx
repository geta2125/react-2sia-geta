// Component HelloWorld
export default function HelloWorld(){
    // Component dengan Props
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div class="card">
            <h1>Hello World</h1>
            <p class="box">Selamat Belajar ReactJs</p>

            <img src="img/cake.png" alt="logo"/>

            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama = "Geta Dewi Artika Sari"
                nim = "2457301061"
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard{...propsUserCard}/>
        </div>
    )
}

// Component Parent-Child
function GreetingBinjai(){
    return(
        // kalau emot di keyboard Windows dengan .
        <small class="box">Salam dari Binjai🤜🙏👌</small>
    )
}

// Component dengan JavaScript
function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div class="box"> 
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

// Component dengan Props
function UserCard(props){
    return (
        <div class="box">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}