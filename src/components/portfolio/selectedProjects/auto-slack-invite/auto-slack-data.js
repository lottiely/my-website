import React, { Component } from 'react';

export var data = 
{
	description: 
	[
	<p>An easy implementation to automate Slack invites to build a Slack Community. 
      <br />
      <br />
      This requires a Typeform, Zapier, and Slack account. 
      <br />
      <br />
      Once the Typeform is created, go to Zapier and create a Typeform and Webhook Zap. 
      <br />
      <br />
      Link your Typeform account to Zapier. Set the trigger to happen when there is a New Entry.
      <br />
      <br />
      Generate your legacy token on Slack. You can generate your legacy token <a href="https://api.slack.com/custom-integrations/legacy-tokens">here</a>. Make sure your legacy token is generated with an admin account.
      <br />
      <br />
      Set the webhook type as POST and then proceed to the template where the URL will be "https://your-team.slack.com/api/users.admin.invite?token=xoxp-000000000000-000000000000-000000000000-00000000000000000000000000000000&email=".
		<br />
      <br />
      Paste your team name and token into the URL, and set the email to be the email entry from your Typeform.
      <br />
      <br />
      The rest are some extra settings that may or may not have anything to do with getting your automated invite to work, but these settings work for me.
      <br />
      <br />
      Payload Type: Json<br />
      Wrap Request In Array: yes<br />
      Unflatten: yes<br />
      Headers: Content-Type: application/x-www-form-urlencoded
      <br />
      <br />
      That's it! All done!</p>
      ],

      tools:
      [
       "Typeform, Zapier, Slack"
      ]
};