import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const europeanCountries = [
  { label: 'Germany', value: 'Germany', states: ['Bavaria', 'Berlin', 'Hesse', 'North Rhine-Westphalia', 'Lower Saxony'] },
  { label: 'France', value: 'France', states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Occitanie', 'Auvergne-Rhône-Alpes', 'Hauts-de-France'] },
  { label: 'United Kingdom', value: 'United Kingdom', states: ['England', 'Scotland', 'Wales', 'Northern Ireland', 'London'] },
  { label: 'Italy', value: 'Italy', states: ['Lombardy', 'Lazio', 'Veneto', 'Campania', 'Emilia-Romagna'] },
  { label: 'Spain', value: 'Spain', states: ['Andalusia', 'Catalonia', 'Valencia', 'Madrid', 'Galicia'] },
];

const citiesData = {
  Bavaria: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Würzburg'],
  Berlin: ['Berlin City'],
  Hesse: ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Fulda'],
  'North Rhine-Westphalia': ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen', 'Bonn'],
  'Lower Saxony': ['Hanover', 'Braunschweig', 'Osnabrück', 'Oldenburg', 'Göttingen'],
  'Île-de-France': ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Montreuil', 'Saint-Denis'],
  'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Avignon'],
  Occitanie: ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan', 'Albi'],
  'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne', 'Clermont-Ferrand', 'Valence'],
  'Hauts-de-France': ['Lille', 'Amiens', 'Roubaix', 'Tourcoing', 'Dunkirk'],
  England: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
  Scotland: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness'],
  Wales: ['Cardiff', 'Swansea', 'Newport', 'Bangor', 'Wrexham'],
  'Northern Ireland': ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Armagh'],
  Lombardy: ['Milan', 'Bergamo', 'Brescia', 'Como', 'Pavia'],
  Lazio: ['Rome', 'Latina', 'Frosinone', 'Viterbo', 'Rieti'],
  Veneto: ['Venice', 'Verona', 'Padua', 'Vicenza', 'Treviso'],
  Campania: ['Naples', 'Salerno', 'Pompeii', 'Caserta', 'Benevento'],
  'Emilia-Romagna': ['Bologna', 'Modena', 'Parma', 'Reggio Emilia', 'Ferrara'],
  Andalusia: ['Seville', 'Malaga', 'Granada', 'Cordoba', 'Cadiz'],
  Catalonia: ['Barcelona', 'Girona', 'Tarragona', 'Lleida', 'Reus'],
  Valencia: ['Valencia', 'Alicante', 'Castellón', 'Gandia', 'Alcoy'],
  Madrid: ['Madrid City'],
  Galicia: ['Santiago de Compostela', 'Vigo', 'La Coruña', 'Lugo', 'Ourense'],
};
const Home = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, display:"flex",
    gap:"20px", padding:"20px" }}>
      <FormControl fullWidth>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          id="country-select"
          value={selectedCountry}
          label="Country"
          onChange={handleCountryChange}
        >
          <MenuItem value="">Select Country</MenuItem>
          {europeanCountries.map((country, index) => (
            <MenuItem key={index} value={country.value}>{country.label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="state-label">State</InputLabel>
        <Select
          labelId="state-label"
          id="state-select"
          value={selectedState}
          label="State"
          onChange={handleStateChange}
        >
          <MenuItem value="" disabled={!selectedCountry}>Select State</MenuItem>
          {selectedCountry && europeanCountries.find(country => country.value === selectedCountry).states.map((state, index) => (
            <MenuItem key={index} value={state}>{state}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          labelId="city-label"
          id="city-select"
          value={selectedCity}
          label="City"
          onChange={handleCityChange}
          disabled={!selectedState}
        >
          <MenuItem value="" disabled={!selectedState}>Select City</MenuItem>
          {selectedState && citiesData[selectedState].map((city, index) => (
            <MenuItem key={index} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default Home