document.querySelector(".changeData").addEventListener("click", changeData);

const getDataAndRender = (function getData(currency = "INR") {
    const xhr = new XMLHttpRequest();
    const url = "min-api.cryptocompare.com/data/top/totalvolfull";
    xhr.open("GET",`https://{url}?limit=10&tsym=${currency}&api_key={1b8a3530c0de681b1b02908d606c5b4c1bb4f404a8c1e207a9d90391071f649d}`, true);

            let output = "<tr>
                <td>
                    <b></b>
                </td>
                <td>
                    <b>Coin</b>
                </td>
                <td>
                    <b>PRICE</b>
                </td>
                <td>
                    <b>HIGH DAY</b>
                </td>
                <td>
                    <b>LOW DAY</b>
                </td>
            </tr>";

})