const DAuth = require("@dauth/core").default
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const dauth = new DAuth({
    baseURL: 'https://dev-api.dauth.network/dauth/sdk/v1.1/',
    clientID: 'demo',
})
const authEmailOtp = async () => {
    await dauth.service.sendOtp({
        account: 'scott001110@gmail.com',
        account_type: 'email',
        request_id: 'test'
    })
}

const authOtpConfirm = async () => {
    await dauth.service.authOptConfirm({
        code: "123456",
        request_id: 'test',
        mode: 'jwt',
        auth_type: 'email'
    })
}

async function main() {
    console.log("start")
    while (true) {
        try {
            await authEmailOtp()
            console.log("send otp success")

            await sleep(1000)
            await authOtpConfirm()
            console.log("confirm otp success")
            await sleep(1000)
        } catch (error) {
            console.log(error)
        }
    }
}
main()