# freeCodeCamp Telephone Number Validator

### Fourth Project in The JavaScript Algorithms and Data Structures Projects

# To-Do

Return <code>true</code> if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

<code>
555-555-5555

(555)555-5555

(555) 555-5555

555 555 5555

5555555555

1 555 555 5555
</code>

For this challenge you will be presented with a string such as <code>800-692-7753</code> or <code>8oo-six427676;laskdjf</code>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is <code>1</code>. Return <code>true</code> if the string is a valid US phone number; otherwise return <code>false</code>.