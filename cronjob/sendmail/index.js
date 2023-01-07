import sib from 'sib-api-v3-sdk'
import fs from 'fs'
import {promisify} from 'util'
import handlebar from 'handlebars'

let defaultClient = sib.ApiClient.instance
let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.APIKEY
const tranEmailAPI = new sib.TransactionalEmailsApi()

const readFile = promisify(fs.readFile);

const sender = {
    email:'arunkp1122@gmail.com',
    name:'Arun Prajapati'
}

const receivers = [
    {
        email:'examp@g.com'
    },
]
let template =  await readFile('./templates/index.htm','utf8')
let html = handlebar.compile(template)

let data = {
    'birthday':{
        title:'Happy birthday',
        main_img:'https://drive.google.com/uc?export=view&id=1qVLE8vbWdN3_S35ksKf9hajSL-7o_AuF',
        ribbon_foot:'https://drive.google.com/uc?export=view&id=1xwQDtsQ7WEeWEZ0WcrJBQYrq-RbCS_AP',
        ribbon:'https://drive.google.com/uc?export=view&id=1kZ3r8AaHw-nDFf9cHrfL_DmpxLN5SmA0',
    }
 
}

let htmlToSend = html(data['birthday'])
tranEmailAPI
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Arun',

        textContent: `
        Cules Coding will teach you how to become {{params.role}} a developer.
        `,
        htmlContent:htmlToSend,
        // htmlContent: `
        // <h1>Mero website</h1>
        // <a href="https://arunprajapati.com.np/">Visit</a>
        // <img src="https://cdn.templates.unlayer.com/assets/1671692196497-new.png" alt="wallpaper"/>
        //         `,
        params: {
            role: 'Frontend',
        },
    })
    .then(console.log)
    .catch(console.log)

// var apiInstance = new sib.EmailCampaignsApi()
// var emailCampaigns = new sib.CreateEmailCampaign()

// emailCampaigns.name = "Test name"
// 
// emailCampaigns.subject = "My subject";
// emailCampaigns.sender = {"name": "From name", "email":"arunkp1122@gmail.com"};
// emailCampaigns.type = "classic"

// emailCampaigns.htmlContent='Congratulations! You successfully sent this example campaign via the Sendinblue API.'

// recipients: {
//     listIds: [2, 7]},
//     scheduledAt: '2018-01-01 00:00:01'
// }

// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
// console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
// console.error(error);
// });
