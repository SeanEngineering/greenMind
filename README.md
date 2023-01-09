# Green Mind

Green Mind is an automated self watering system and is a convenient and efficient way to ensure your plants are properly watered. Using sensors to monitor soil moisture levels, the system automatically dispenses water when needed, saving you time and effort. With user-friendly scheduling features, you can customize watering schedules to suit your specific plant care needs. Never worry about over or under watering again with our automated self watering system.

## Development
This application has been developed using a combination of React, TypeScript, Cloud Firestore, Java, and MySQL. 
On the frontend, React, TypeScript, and Cloud Firestore have been used to create a user-friendly interface for interacting with the system.
Users can view the current status of their plants, set watering schedules, and receive notifications when it is time to water their plants.
Cloud Firestore is used to contain a database of plants.

The backend of the application has been built using Java and MySQL. 
Java is used to handle the business logic of the application, such as scheduling watering times and sending notifications to the frontend. 
MySQL is used to store user and plant data, as well as historical watering information.

The system also includes an automated watering feature, which utilizes sensors to determine when plants need to be watered. 
When it is time to water the plants, the system will automatically dispense the appropriate amount of water.

Overall, this application aims to make plant care easy and convenient for users, while also helping to conserve water by only watering plants when necessary.

## Resources
- Weather call reference: https://api.open-meteo.com
- Java 3-axis control: https://github.com/SeanEngineering/JavaStepperControl (note the serial comms in this project will be used to integrate with an arduino via Java)
- 3-axis CNC design: https://createforcuriosity.com/en/design/9oMwl8kL/details
- position DB in MySQL has been set up.
- localhost connections have been made in Java pointing to port 5173 and in react for 8080

The 3-axis CNC has been modded to house a 12V water pump which will use the same power supply as the 3-axis controller. This can be purchased here: https://ja.aliexpress.com/item/1005003912562799.html?spm=a2g0o.productlist.0.0.1e1a44dcnvRoau&algo_pvid=ba56a90c-3ae0-40fc-b52f-9c15aa6d02ca&algo_exp_id=ba56a90c-3ae0-40fc-b52f-9c15aa6d02ca-12&pdp_ext_f=%7B%22sku_id%22%3A%2212000027452471764%22%7D&pdp_npi=2%40dis%21AUD%21120.43%2173.46%21%21%21%21%21%40210318cb16704489692995261e8f80%2112000027452471764%21sea&curPageLogUid=5wkP4Evp3HCh

## Requirements
1. Ability to set watering schedules: The application should allow users to specify how often they want their plants to be watered, as well as the duration of each watering session
2. ✅ 05/01/23 - Plant database: The application should include a database of common plants, with information on each plant's watering needs (e.g. how much water they need, how often they need to be watered).
3. Moisture sensor integration: The application should be able to integrate with moisture sensors to determine when plants need watering, and adjust watering schedules accordingly.
4. ✅ 09/01/23 Watering system control: The application should be able to control the watering system (e.g. turn it on and off, adjust water flow) in order to properly water plants according to their needs.
5. User notification: The application should notify users when plants have been watered, or if there are any issues with the watering system.
6. ✅ 06/01/23 Water usage tracking: The application should track and display information on water usage, so users can monitor their water usage and make any necessary adjustments.
7. Plant care tips: The application should provide users with plant care tips, such as how to properly fertilize and prune their plants.
8. ✅ 04/01/23 - Weather integration: The application should be able to access weather data and adjust watering schedules accordingly (e.g. skipping watering on days when it is raining).
9. Mobile compatibility: The application should be accessible from mobile devices, so users can manage their watering system remotely.

### This project is currently in development.
