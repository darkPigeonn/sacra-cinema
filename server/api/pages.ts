export default defineEventHandler(async (event) => {
  
  try {
    const runTimeConfig = useRuntimeConfig();
    const response = await fetch('https://api.imavi.org/imavi/pages/view/awarding-2024', {
      headers: {
        Id: runTimeConfig.APP_ID,
        Secret: runTimeConfig.APP_SECRET,
        Partner: runTimeConfig.PARTNER,
      },
    });

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});