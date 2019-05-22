(() => {
    document.addEventListener("DOMContentLoaded", () => {
        let form = document.getElementById("test");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let json = toJSONString(this);

            request(json);
        }, false);
    });

    function toJSONString(form) {
        let obj = {};
        let elements = document.querySelectorAll("input, select, textarea");

        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if(name) {
                obj[name] = value;
            }
        }

        obj.merge_fields = {
            FNAME: obj.FNAME,
            LNAME: obj.LNAME
        };
        delete obj.FNAME;
        delete obj.LNAME;

        return JSON.stringify(obj);
    }

    function request(postData) {
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "https://priceless-aryabhata-4530e1-0e60a8.netlify.live/.netlify/functions/main", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(postData);
    }
})();