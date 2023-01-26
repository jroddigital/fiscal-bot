require( 'dotenv' ).config();
const { App } = require('@slack/bolt');

// This pulls data from dates.json file and returns it in console log
const jsonObj = require('./dates.json'); 
console.log(jsonObj['2023-2-17'].fiscal_week);

/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: false,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Gets todays date and converts to string as dateResult
const todayDate = new Date();
const todayDateYear = todayDate.getUTCFullYear();
const todayDateMonth = todayDate.getUTCMonth()+1;
const todayDateDay = todayDate.getUTCDate();

year= String(todayDateYear);
month= String(todayDateMonth)
day= String (todayDateDay)

let text1 = year;
let text2 = month;
let text3 = day;
let dateResult = text1.concat("-", text2,"-", text3);
console.log(dateResult);

console.log(todayDate.getUTCFullYear());
console.log(todayDate.toISOString());
console.log(todayDateYear);
console.log(todayDateMonth);
console.log(todayDateDay);


// Find key on dates.json file
const findKeyBasedOnValue = (obj, value) => Object.keys(obj).find((key) => obj[key] === value)

const data = {a: 'no-test', b: 'test'}

console.log(findKeyBasedOnValue(data, 'no-test')) // a

console.log(jsonObj[dateResult].fiscal_week);

// Listen to incoming messages that contain "fiscal week"
app.message(/fiscal week/i, async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hola <@${message.user}>! We are currently in THD Fiscal Week ${jsonObj[dateResult].fiscal_week}`
        },
        /*
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }*/
      }
    ],
    text: `Hola <@${message.user}>`
  });
});







//Listens for app mention, then responds
app.event('app_mention', async ({ event, client }) => {
  try{

    // Sets the users message = to 'str' & removes @fiscal-bot mention
    const str = event.text

    let removeMention = str.substring(15);

    let removeMentionMonth = str.slice(1)
    let removeMentionDay = str.slice(2,3)
    let removeMentionYear = str.slice(4)

    year2= String(removeMentionYear);
    month2= String(removeMentionMonth)
    day2= String (removeMentionDay)

    let finalYear = year2;
    let finalMonth = month2;
    let finalDay = day2;
    let finalDateResult = month2.concat("-", day2,"-", year2);
    // let removeMentionResult = 
    
    //
    let mentionMonth = removeMention.substring(1);
    console.log(mentionMonth);
    let mentionDay = removeMention.substring(1,3);
    console.log(mentionDay);
    let mentionYear = removeMention.substring(3);
    console.log(mentionYear); 
    let mentionDateResult = mentionMonth.concat("-", mentionDay,"-", mentionYear);

    //directly call the api method 'chat.postmessage'

    const result = await client.chat.postMessage({
      channel: event.channel,
      text: `Thanks for the mention, ${removeMention} = THD Fiscal Week *${jsonObj[removeMention].fiscal_week}*`
    });
  }
catch (error) {
  console.error(error);
}

});


/*

// Listens for incoming messages with a custom date 
app.message(/''-''-''/i, async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hi <@${message.user}>! ${message.text} was THD Fiscal Week hghg `
        },

        */
        /*
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }*/
        /*
      }
    ],
    text: `Hola <@${message.user}>`
  });
});
*/






app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});





(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();









/*

// Unix Epoch time for Week 32
const whenSeptemberEnds = '1662861150';

async () => {
  try {
    // Call chat.scheduleMessage with the built-in client
    const result = await say({
      channel: '#C03MLU6FHB9',
      post_at: whenSeptemberEnds,
      text: `We are currently in Fiscal Week ${jsonObj[dateResult].fiscal_week}`
    });
  }
  catch (error) {
    logger.error(error);
  }
};
*/



// This will match any message that contains 👋
// app.message(/^(hi|hello|hey|:wave:).*/i, async ({ message, say }) => {
//  await say(`Hello, <@${message.user}>`);
// });

// This will match any message that contains 'thanks'
// app.message(/^(thanks|thank you|appreciate it|good lookin).*/i, async ({ message, say }) => {
//  await say(`You're welcome, <@${message.user}>!`);
// });

