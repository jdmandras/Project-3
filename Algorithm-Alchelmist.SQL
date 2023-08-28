CREATE TABLE Global_air_pollution(
country VARCHAR,
city VARCHAR Primary Key,
AQI_value INTEGER,
AQI_Category VARCHAR(80) ,
CO_AQI_Value INTEGER,
CO_AQI_Category VARCHAR(80) ,
cOzone_AQI_Value Integer ,
Ozone_AQI_Category VARCHAR(80),
NO2_AQI_Value Integer,
NO2_AQI_Category VARCHAR(80),
PM25_AQI_Value Integer ,
PM25_AQI_Category VARCHAR(80)
);

CREATE TABLE City_coordinates(
city VARCHAR(30) Primary KEY NOT NULL,
Lon numeric NOT NULL,
lat numeric NOT NULL
);

CREATE TABLE Co2_data(
Year Integer,
Month Integer,
Day Integer,
Cycle numeric ,
Trend numeric
);

CREATE TABLE Global_land_temp(
Year Integer NOT NULL,
Anomaly  numeric NOT NULL
);

CREATE TABLE Global_land_and_oceantemp(
Year Integer NOT NULL,
Anomaly  numeric NOT NULL
);


CREATE TABLE Global_meamslr_prediction (
Location Varchar NOT NULL,
Lon numeric NOT NULL,
Lat numeric  NOT NULL,
Background_RSL_rate numeric  NOT NULL,
RSL_in_2020 numeric  NOT NULL,
RSL_in_2030  numeric NOT NULL,
RSL_in_2040  numeric NOT NULL,
RSL_in_2050  numeric NOT NULL,
RSL_in_2060  numeric NOT NULL,
RSL_in_2070  numeric NOT NULL,
RSL_in_2080  numeric NOT NULL,
RSL_in_2090  numeric NOT NULL,
RSL_in_2100  numeric NOT NULL,
RSL_in_2110  numeric NOT NULL,
RSL_in_2120  numeric NOT NULL,
RSL_in_2150  numeric NOT NULL,
RSL_in_2200  numeric  NOT NULL
);

CREATE TABLE Global_Ocean_temp(
Year Integer NOT NULL,
Anomaly  numeric NOT NULL
);

CREATE TABLE Ocean_warming_data (
Year Integer NOT NULL Primary KEY,
Ocean_warming numeric NOT NULL
);

CREATE TABLE Sea_level_rise_historical(
Year INTEGER NOT NULL Primary KEY,
CSIRO_Adjusted_sea_level VARCHAR(80) ,
CSIRO_Lower_error_bound VARCHAR(80) ,
CSIRO_Upper_error_bound VARCHAR(80) ,
NOAA_Adjusted_sea_level VARCHAR(80) 
);