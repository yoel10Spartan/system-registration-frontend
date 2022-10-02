const { default: axios } = require("axios");

class Connection {
    constructor(){
        this.ok_sendData = false;
        this.ok_sendFields = false;
        this.data = {}
        this.ok_sendEmail = false;

        this.url = process.env.REACT_APP_URL;
    }

    async sendData(data){
        const request = await axios.post(
            `${this.url}/api/attende/`,
            data,
            {
                headers: 'Content-Type: application/json'
            }
        )

        this.ok_sendData = request.data.ok;
        this.data = request.data;
    }

    async sendFiles(files){
        if(!this.ok_sendData){return}

        const formData = new FormData();
        formData.append("file_1", files.file_1[0]);
        formData.append("file_2", files.file_2[0]);
        formData.append("file_3", files.file_3[0]);
        formData.append("file_4", files.file_4[0]);
        formData.append("file_5", files.file_5[0]);
        formData.append("file_6", files.file_6[0]);
        formData.append("file_7", files.file_7[0]);
        formData.append("file_8", files.file_8[0]);

        const params = new URLSearchParams({
            id: this.data.id
        }).toString();

        const request = await axios.post(
            `${this.url}/api/attende/files?` + params,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        this.ok_sendFields = request.data.ok;
    }

    async sendEmail(){
        if(!(this.ok_sendData && this.ok_sendFields)){return}

        const request = await axios.post(
            `${this.url}/api/attende/send-mail`,
            this.data,
            {
                headers: 'Content-Type: application/json'
            }
        )
        
        this.ok_sendEmail = request.data.ok;
        this.ok_sendData = false;
        this.ok_sendFields = false;
    }
}

export default Connection;