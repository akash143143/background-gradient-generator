let btn1 = document.querySelector('.btn1');
        let btn2 = document.querySelector('.btn2');
        let rectDiv = document.querySelector('.rectangle');
        let rgb1 = "#34d6f4";
        let rgb2 = "#296371";


        const hexaValues = () => {
            // '0 1 2 3 4 5 6 7 8 9 a b c d e f' == 16
            let hexaValue = "0123456789abcdef";
            let color = "#";

            for(let i = 0; i < 6; i++){
                color = color + hexaValue[Math.floor(Math.random() * 16)];
            }

            return color;
        }

        const handleEvent1 = () => {
            rgb1 = hexaValues();
            // console.log(rgb1);
            btn1.innerText = rgb1;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            rectDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
        }

        const handleEvent2 = () => {
            rgb2 = hexaValues();
            // console.log(rgb2);
            btn2.innerText = rgb2;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            rectDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
        }
        

        rectDiv.addEventListener('click', () => {
            navigator.clipboard.writeText(rectDiv.innerText);

            alert('code copied...');
        })

        
        btn1.addEventListener('click', () => handleEvent1());
        btn2.addEventListener('click', () => handleEvent2());
