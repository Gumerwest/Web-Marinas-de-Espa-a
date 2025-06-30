// Datos de Marinas de España - Actualizado con Andalucía corregida
const marinasEspana = [
  {
    name: "Club Náutico S'Arenal",
    lat: 39.5167,
    lng: 2.7333,
    region: "Baleares",
    website: "http://www.cnsarenal.com/"
  },
  {
    name: "Marina Port de Mallorca",
    lat: 39.5667,
    lng: 2.6333,
    region: "Baleares",
    website: "https://www.portsib.es/"
  },
  {
    name: "Port Esportiu Alcudiamar",
    lat: 39.85,
    lng: 3.1167,
    region: "Baleares",
    website: "https://www.alcudiamar.com/"
  },
  {
    name: "Real Club Náutico Puerto de Pollensa",
    lat: 39.9,
    lng: 3.0833,
    region: "Baleares",
    website: "http://www.rcnpp.com/"
  },
  {
    name: "Port de Sóller",
    lat: 39.7833,
    lng: 2.6833,
    region: "Baleares",
    website: "https://www.portsib.es/"
  },
  {
    name: "Puerto Portals",
    lat: 39.5333,
    lng: 2.5667,
    region: "Baleares",
    website: "https://www.puertoportals.com/"
  },
  {
    name: "Marina Palma Cuarentena",
    lat: 39.55,
    lng: 2.6167,
    region: "Baleares",
    website: "https://www.marinacuarentena.com/"
  },
  {
    name: "Club de Mar",
    lat: 39.55,
    lng: 2.6,
    region: "Baleares",
    website: "https://www.clubdemar-mallorca.com/"
  },
  {
    name: "Port Adriano",
    lat: 39.5167,
    lng: 2.5333,
    region: "Baleares",
    website: "https://www.portadriano.com/"
  },
  {
    name: "Marina Cala d'Or",
    lat: 39.3667,
    lng: 3.2333,
    region: "Baleares",
    website: "https://www.marinacalador.com/"
  },
  {
    name: "Nautic Center Menorca",
    lat: 39.8833,
    lng: 4.25,
    region: "Baleares",
    website: "http://www.nauticcentermenorca.com/"
  },
  {
    name: "Marina Deportiva de Menorca",
    lat: 39.8667,
    lng: 4.2667,
    region: "Baleares",
    website: "https://www.marinadeportivamenorca.com/"
  },
  {
    name: "Club Náutic Fornells",
    lat: 40.0667,
    lng: 4.1333,
    region: "Baleares",
    website: "http://www.cnfornells.com/"
  },
  {
    name: "Club Náutic Ciutadella",
    lat: 40.0,
    lng: 3.8333,
    region: "Baleares",
    website: "http://www.cnciutadella.com/"
  },
  {
    name: "Puerto de Addaia",
    lat: 40.0333,
    lng: 4.2,
    region: "Baleares",
    website: "https://www.addaia.es/"
  },
  {
    name: "Marina Cala en Bosch",
    lat: 39.9333,
    lng: 3.8167,
    region: "Baleares",
    website: "https://www.marinacalaenbosch.com/"
  },
  {
    name: "Puerto de Cala Galdana",
    lat: 39.9333,
    lng: 3.9333,
    region: "Baleares",
    website: "https://www.calagaldana.com/"
  },
  {
    name: "Varadero Ibiza",
    lat: 38.9167,
    lng: 1.4333,
    region: "Baleares",
    website: "https://www.varaderoibiza.com/"
  },
  {
    name: "Marina Port Ibiza",
    lat: 38.9167,
    lng: 1.4333,
    region: "Baleares",
    website: "https://www.marinaportibiza.com/"
  },
  {
    name: "Marina Ibiza",
    lat: 38.9,
    lng: 1.4167,
    region: "Baleares",
    website: "https://www.marinaibiza.com/"
  },
  {
    name: "Marina Botafoch",
    lat: 38.9167,
    lng: 1.45,
    region: "Baleares",
    website: "https://www.marinabotafoch.com/"
  },
  {
    name: "Marina La Savina",
    lat: 38.7333,
    lng: 1.4167,
    region: "Baleares",
    website: "https://www.marinasavina.com/"
  },
  {
    name: "Port les Cases d'Alcanar",
    lat: 40.55,
    lng: 0.5167,
    region: "Cataluña",
    website: "https://ports.gencat.cat/es/puerto-de-les-cases-dalcanar/"
  },
  {
    name: "Sant Carles Marina",
    lat: 40.6167,
    lng: 0.5833,
    region: "Cataluña",
    website: "https://www.santcarlesmarina.com/"
  },
  {
    name: "Port de Cambrils",
    lat: 41.0667,
    lng: 1.0667,
    region: "Cataluña",
    website: "https://marinacambrils.com/"
  },
  {
    name: "Port Tarraco",
    lat: 41.1167,
    lng: 1.25,
    region: "Cataluña",
    website: "https://www.porttarraco.com/"
  },
  {
    name: "Marina Port Vell",
    lat: 41.3833,
    lng: 2.1833,
    region: "Cataluña",
    website: "https://www.marinaportvel.com/"
  },
  {
    name: "Port Olímpic",
    lat: 41.3833,
    lng: 2.2,
    region: "Cataluña",
    website: "https://www.portolimic.com/"
  },
  {
    name: "Marina de Badalona",
    lat: 41.45,
    lng: 2.25,
    region: "Cataluña",
    website: "https://www.marinabadalona.com/"
  },
  {
    name: "Port de Mataró",
    lat: 41.5333,
    lng: 2.45,
    region: "Cataluña",
    website: "https://www.portmataro.com/"
  },
  {
    name: "Port de Blanes",
    lat: 41.6667,
    lng: 2.7833,
    region: "Cataluña",
    website: "https://www.portblanes.com/"
  },
  {
    name: "Marina Empuriabrava",
    lat: 42.25,
    lng: 3.1167,
    region: "Cataluña",
    website: "https://www.marinaempuriabrava.com/"
  },
  {
    name: "Marina Benicarló",
    lat: 40.4167,
    lng: 0.4167,
    region: "Valencia",
    website: "https://www.marinabenicarlo.com/"
  },
  {
    name: "Marina Port Castelló",
    lat: 39.9833,
    lng: -0.0333,
    region: "Valencia",
    website: "https://marinaportcastello.es/"
  },
  {
    name: "Marina Burriana Nova",
    lat: 39.8833,
    lng: -0.0833,
    region: "Valencia",
    website: "https://www.burriananova.com/"
  },
  {
    name: "Marina Port Valencia",
    lat: 39.45,
    lng: -0.3167,
    region: "Valencia",
    website: "https://www.marinaportvalencia.com/"
  },
  {
    name: "Marina de Denia",
    lat: 38.8333,
    lng: 0.1,
    region: "Valencia",
    website: "https://www.marinadenia.com/"
  },
  {
    name: "Marina Greenwich",
    lat: 38.35,
    lng: -0.4833,
    region: "Valencia",
    website: "https://www.marinagreenwich.com/"
  },
  {
    name: "Marina Salinas",
    lat: 38.2,
    lng: -0.7,
    region: "Valencia",
    website: "https://www.marinasalinas.com/"
  },
  {
    name: "Puerto Deportivo Tomás Maestre",
    lat: 37.6,
    lng: -0.9833,
    region: "Murcia",
    website: "http://www.puertomaestre.com/"
  },
  {
    name: "Club Náutico Los Nietos",
    lat: 37.7,
    lng: -0.85,
    region: "Murcia",
    website: "https://cnlosnietos.com/"
  },
  {
    name: "Real Club de Regatas Cartagena",
    lat: 37.6,
    lng: -0.9833,
    region: "Murcia",
    website: "http://clubregatascartagena.es/"
  },
  {
    name: "Club Náutico de Águilas",
    lat: 37.4167,
    lng: -1.5833,
    region: "Murcia",
    website: "https://www.cnaguilas.com/"
  },
  {
    name: "Puerto Deportivo de Mazarrón",
    lat: 37.5833,
    lng: -1.3167,
    region: "Murcia",
    website: "https://www.puertomazarron.com/"
  },
  {
    name: "Sadamar",
    lat: 42.6,
    lng: -8.8,
    region: "Galicia",
    website: "https://www.sadamar.es/"
  },
  {
    name: "Marina Muxía",
    lat: 43.1167,
    lng: -9.2167,
    region: "Galicia",
    website: "http://www.marinamuxia.com/"
  },
  {
    name: "Marina Muros",
    lat: 42.7667,
    lng: -9.0667,
    region: "Galicia",
    website: "http://www.muport.es/"
  },
  {
    name: "Marina Vilagarcía",
    lat: 42.6,
    lng: -8.7667,
    region: "Galicia",
    website: "https://www.marinavilagarcia.com/"
  },
  {
    name: "Nauta Sanxenxo",
    lat: 42.4,
    lng: -8.8167,
    region: "Galicia",
    website: "https://www.nautasanxenxo.com/"
  },
  {
    name: "Puerto Deportivo de Gijón",
    lat: 43.55,
    lng: -5.6667,
    region: "Asturias",
    website: "https://www.puertogijon.es/"
  },
  {
    name: "Puerto Castillo",
    lat: 28.4167,
    lng: -13.8667,
    region: "Canarias",
    website: "https://www.puertocastillo.com/"
  },
  {
    name: "Puerto Mogán",
    lat: 27.8167,
    lng: -15.7167,
    region: "Canarias",
    website: "https://www.puertomogan.com/"
  },
  {
    name: "Marina Las Palmas",
    lat: 28.15,
    lng: -15.4167,
    region: "Canarias",
    website: "https://www.marinalapalmas.com/"
  },
  {
    name: "Marina Rubicón",
    lat: 28.8667,
    lng: -13.8333,
    region: "Canarias",
    website: "https://www.marinarubicon.com/"
  },
  {
    name: "Marina Tenerife",
    lat: 28.4667,
    lng: -16.25,
    region: "Canarias",
    website: "https://www.marinatenerife.com/"
  },
  {
    name: "Puerto Deportivo Alcaidesa Marina",
    lat: 36.158105,
    lng: -5.35975,
    region: "Andalucía",
    website: "https://alcaidesamarina.com"
  },
  {
    name: "Puerto Deportivo Aguadulce",
    lat: 36.814303,
    lng: -2.5618535,
    region: "Andalucía",
    website: "https://puertodeportivoaguadulce.com"
  },
  {
    name: "Puerto Marina El Rompido",
    lat: 37.2178994,
    lng: -7.1278839,
    region: "Andalucía",
    website: "https://puertoelrompido.com"
  },
  {
    name: "Almerimar",
    lat: 36.6961134,
    lng: -2.7939968,
    region: "Andalucía",
    website: "https://almerimarpuerto.com"
  },
  {
    name: "Puerto Deportivo de Benalmádena",
    lat: 36.594212,
    lng: -4.512339,
    region: "Andalucía",
    website: "https://puertobenalmadena.es"
  },
  {
    name: "Puerto Sherry",
    lat: 36.5788918,
    lng: -6.2758391,
    region: "Andalucía",
    website: "https://puertosherry.com"
  },
  {
    name: "Puerto Deportivo de Estepona",
    lat: 36.4159657,
    lng: -5.1585576,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com"
  },
  {
    name: "Real Club Náutico El Candado",
    lat: 36.7155591,
    lng: -4.3464078,
    region: "Andalucía",
    website: "https://clubelcandado.com"
  },
  {
    name: "Puerto Banús",
    lat: 36.4859378,
    lng: -4.9544317,
    region: "Andalucía",
    website: "https://puerto-banus.com"
  },
  {
    name: "IGY Málaga Marina",
    lat: 36.7144457,
    lng: -4.4146948,
    region: "Andalucía",
    website: "https://igymarinas.com"
  },
  {
    name: "Real Club Náutico Estepona",
    lat: 36.4150616,
    lng: -5.1587685,
    region: "Andalucía",
    website: "https://rcne.es"
  },
  {
    name: "Puerto de San José",
    lat: 36.7624024,
    lng: -2.1027184,
    region: "Andalucía",
    website: "https://clubnauticodesanjose.com"
  },
  {
    name: "Puerto Deportivo de Marbella",
    lat: 36.5060342,
    lng: -4.8901825,
    region: "Andalucía",
    website: "https://puertodeportivo.marbella.es"
  },
  {
    name: "Puerto Deportivo de Fuengirola",
    lat: 36.5417052,
    lng: -4.6187153,
    region: "Andalucía",
    website: "https://pdfsam.es"
  },
  {
    name: "Puerto Deportivo de La Duquesa",
    lat: 36.3555117,
    lng: -5.2476293,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com"
  },
  {
    name: "Marina del Este",
    lat: 36.7278514,
    lng: -3.7264554,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com"
  },
  {
    name: "Marina Motril",
    lat: 36.7243423,
    lng: -3.5271799,
    region: "Andalucía",
    website: "https://marinamotril.com"
  },
  {
    name: "Puerto de Sotogrande",
    lat: 36.2869021,
    lng: -5.2745656,
    region: "Andalucía",
    website: "https://puertosotogrande.es"
  }
];
