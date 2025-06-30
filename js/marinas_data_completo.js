// Datos de Marinas de España - Actualizado con enlaces de Google Maps
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
    name: "Club de Mar-Mallorca",
    lat: 39.5333,
    lng: 2.6167,
    region: "Baleares",
    website: "https://www.clubdemar-mallorca.com/"
  },
  {
    name: "Marina Ibiza",
    lat: 38.9067,
    lng: 1.4333,
    region: "Baleares",
    website: "https://www.marinaibiza.com/"
  },
  {
    name: "Marina Botafoch",
    lat: 38.9167,
    lng: 1.4333,
    region: "Baleares",
    website: "https://www.marinabotafoch.com/"
  },
  {
    name: "Club Náutico Ibiza",
    lat: 38.9,
    lng: 1.4167,
    region: "Baleares",
    website: "https://www.cnibiza.com/"
  },
  {
    name: "Marina Santa Eulalia",
    lat: 38.9833,
    lng: 1.5333,
    region: "Baleares",
    website: "https://www.marinasantaeulalia.com/"
  },
  {
    name: "Puerto de San Antonio",
    lat: 38.9833,
    lng: 1.3,
    region: "Baleares",
    website: "https://www.portsib.es/"
  },
  {
    name: "Marina Formentera",
    lat: 38.7,
    lng: 1.4333,
    region: "Baleares",
    website: "https://www.marinaformentera.com/"
  },
  {
    name: "Puerto de Mahón",
    lat: 39.8833,
    lng: 4.2667,
    region: "Baleares",
    website: "https://www.portsib.es/"
  },
  {
    name: "Club Marítimo de Mahón",
    lat: 39.8833,
    lng: 4.2667,
    region: "Baleares",
    website: "https://www.clubmaritimodemahon.com/"
  },
  {
    name: "Puerto de Ciutadella",
    lat: 40.0,
    lng: 3.8333,
    region: "Baleares",
    website: "https://www.portsib.es/"
  },
  {
    name: "Club Náutico Ciutadella",
    lat: 40.0,
    lng: 3.8333,
    region: "Baleares",
    website: "https://www.cnciutadella.com/"
  },
  {
    name: "Marina Port Ginesta",
    lat: 41.2667,
    lng: 1.9,
    region: "Cataluña",
    website: "https://www.portginesta.com/"
  },
  {
    name: "Port Vell",
    lat: 41.3833,
    lng: 2.1833,
    region: "Cataluña",
    website: "https://www.portvell.com/"
  },
  {
    name: "Marina Port Forum",
    lat: 41.4167,
    lng: 2.2167,
    region: "Cataluña",
    website: "https://www.marinaportforum.com/"
  },
  {
    name: "Port Olímpic",
    lat: 41.3833,
    lng: 2.2,
    region: "Cataluña",
    website: "https://www.portolimpic.com/"
  },
  {
    name: "Marina Badalona",
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
    name: "Marina Arenys de Mar",
    lat: 41.5833,
    lng: 2.55,
    region: "Cataluña",
    website: "https://www.marinaarenys.com/"
  },
  {
    name: "Port de Blanes",
    lat: 41.6667,
    lng: 2.8,
    region: "Cataluña",
    website: "https://www.portblanes.com/"
  },
  {
    name: "Marina Palamós",
    lat: 41.85,
    lng: 3.1333,
    region: "Cataluña",
    website: "https://www.marinapalamos.com/"
  },
  {
    name: "Club Náutico L'Escala",
    lat: 42.1167,
    lng: 3.1333,
    region: "Cataluña",
    website: "https://www.cnlescala.com/"
  },
  {
    name: "Port de Roses",
    lat: 42.2667,
    lng: 3.1833,
    region: "Cataluña",
    website: "https://www.portroses.com/"
  },
  {
    name: "Marina Empuriabrava",
    lat: 42.25,
    lng: 3.1167,
    region: "Cataluña",
    website: "https://www.marinaempuriabrava.com/"
  },
  {
    name: "Port de la Selva",
    lat: 42.3333,
    lng: 3.2,
    region: "Cataluña",
    website: "https://www.portdelaselva.com/"
  },
  {
    name: "Marina Valencia",
    lat: 39.45,
    lng: -0.3167,
    region: "Valencia",
    website: "https://www.marinavalencia.com/"
  },
  {
    name: "Real Club Náutico Valencia",
    lat: 39.4667,
    lng: -0.3167,
    region: "Valencia",
    website: "https://www.rcnv.es/"
  },
  {
    name: "Puerto de Sagunto",
    lat: 39.65,
    lng: -0.2167,
    region: "Valencia",
    website: "https://www.puertosagunto.com/"
  },
  {
    name: "Club Náutico Castellón",
    lat: 39.9833,
    lng: 0.0333,
    region: "Valencia",
    website: "https://www.cncastellon.com/"
  },
  {
    name: "Marina de Dénia",
    lat: 38.8333,
    lng: 0.1,
    region: "Valencia",
    website: "https://www.marinadenia.com/"
  },
  {
    name: "Club Náutico Jávea",
    lat: 38.7833,
    lng: 0.1667,
    region: "Valencia",
    website: "https://www.cnjavea.com/"
  },
  {
    name: "Real Club Náutico Calpe",
    lat: 38.65,
    lng: 0.05,
    region: "Valencia",
    website: "https://www.rcncalpe.com/"
  },
  {
    name: "Club Náutico Altea",
    lat: 38.6,
    lng: -0.05,
    region: "Valencia",
    website: "https://www.cnaltea.com/"
  },
  {
    name: "Marina Greenwich",
    lat: 38.5333,
    lng: -0.1167,
    region: "Valencia",
    website: "https://www.marinagreenwich.com/"
  },
  {
    name: "Real Club de Regatas Alicante",
    lat: 38.35,
    lng: -0.4833,
    region: "Valencia",
    website: "https://www.rcra.es/"
  },
  {
    name: "Marina Deportiva Santa Pola",
    lat: 38.2,
    lng: -0.5667,
    region: "Valencia",
    website: "https://www.marinasantapola.com/"
  },
  {
    name: "Club Náutico Torrevieja",
    lat: 37.9833,
    lng: -0.6833,
    region: "Valencia",
    website: "https://www.cntorrevieja.com/"
  },
  {
    name: "Real Club de Regatas de Cartagena",
    lat: 37.6,
    lng: -0.9833,
    region: "Murcia",
    website: "https://www.regatascartagena.com/"
  },
  {
    name: "Club de Mar Menor",
    lat: 37.7,
    lng: -0.8,
    region: "Murcia",
    website: "https://www.clubmarmenor.com/"
  },
  {
    name: "Marina de las Salinas",
    lat: 37.7167,
    lng: -0.8333,
    region: "Murcia",
    website: "https://www.marinasalinas.com/"
  },
  {
    name: "Puerto Deportivo Tomás Maestre",
    lat: 37.6833,
    lng: -0.8167,
    region: "Murcia",
    website: "https://www.tomasmaestre.com/"
  },
  {
    name: "Marina Seca",
    lat: 37.65,
    lng: -0.85,
    region: "Murcia",
    website: "https://www.marinaseca.com/"
  },
  {
    name: "Real Club Náutico de A Coruña",
    lat: 43.3667,
    lng: -8.4,
    region: "Galicia",
    website: "https://www.rcnacoruna.com/"
  },
  {
    name: "Marina Coruña",
    lat: 43.3667,
    lng: -8.4,
    region: "Galicia",
    website: "https://www.marinacoruna.com/"
  },
  {
    name: "Club Náutico Sada",
    lat: 43.35,
    lng: -8.25,
    region: "Galicia",
    website: "https://www.cnsada.com/"
  },
  {
    name: "Marina Ferrol",
    lat: 43.4833,
    lng: -8.2333,
    region: "Galicia",
    website: "https://www.marinaferrol.com/"
  },
  {
    name: "Club Náutico Villagarcía",
    lat: 42.6,
    lng: -8.7667,
    region: "Galicia",
    website: "https://www.cnvillagarcia.com/"
  },
  {
    name: "Marina Vilagarcía",
    lat: 42.6,
    lng: -8.7667,
    region: "Galicia",
    website: "https://www.marinavilagarcia.com/"
  },
  {
    name: "Real Club Náutico de Vigo",
    lat: 42.2333,
    lng: -8.7167,
    region: "Galicia",
    website: "https://www.rcnvigo.com/"
  },
  {
    name: "Marina Davila Sport",
    lat: 42.2333,
    lng: -8.7167,
    region: "Galicia",
    website: "https://www.marinadavilasport.com/"
  },
  {
    name: "Club Náutico Baiona",
    lat: 42.1167,
    lng: -8.85,
    region: "Galicia",
    website: "https://www.cnbaiona.com/"
  },
  {
    name: "Marina Deportiva Gijón",
    lat: 43.5333,
    lng: -5.6667,
    region: "Asturias",
    website: "https://www.marinagijon.com/"
  },
  {
    name: "Real Club Astur de Regatas",
    lat: 43.5333,
    lng: -5.6667,
    region: "Asturias",
    website: "https://www.rcar.es/"
  },
  {
    name: "Club Náutico Avilés",
    lat: 43.5667,
    lng: -5.9167,
    region: "Asturias",
    website: "https://www.cnaviles.com/"
  },
  {
    name: "Marina Las Palmas",
    lat: 28.15,
    lng: -15.4167,
    region: "Canarias",
    website: "https://www.marinalapalmas.com/"
  },
  {
    name: "Real Club Náutico de Gran Canaria",
    lat: 28.15,
    lng: -15.4167,
    region: "Canarias",
    website: "https://www.rcngc.com/"
  },
  {
    name: "Marina Rubicón",
    lat: 28.8667,
    lng: -13.8333,
    region: "Canarias",
    website: "https://www.marinarubicon.com/"
  },
  {
    name: "Marina Lanzarote",
    lat: 28.95,
    lng: -13.55,
    region: "Canarias",
    website: "https://www.marinalanzarote.com/"
  },
  {
    name: "Club Náutico Arrecife",
    lat: 28.95,
    lng: -13.55,
    region: "Canarias",
    website: "https://www.cnarrecife.com/"
  },
  {
    name: "Marina San Miguel",
    lat: 28.4667,
    lng: -16.3167,
    region: "Canarias",
    website: "https://www.marinasanmiguel.com/"
  },
  {
    name: "Real Club Náutico de Tenerife",
    lat: 28.4667,
    lng: -16.25,
    region: "Canarias",
    website: "https://www.rcnt.es/"
  },
  {
    name: "Puerto Deportivo Alcaidesa Marina",
    lat: 36.158105,
    lng: -5.35975,
    region: "Andalucía",
    website: "https://alcaidesamarina.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+Alcaidesa+Marina/@36.158105,-5.35975,16z/data=!3m1!4b1!4m6!3m5!1s0xd0cc088eaf3e6db:0x37c06d793e231de0!8m2!3d36.158105!4d-5.35975!16s%2Fg%2F1vhlzfnx?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo Aguadulce",
    lat: 36.814303,
    lng: -2.5618535,
    region: "Andalucía",
    website: "https://puertodeportivoaguadulce.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+Aguadulce/@36.814303,-2.5618535,17z/data=!3m1!4b1!4m6!3m5!1s0xd7071ca660941f1:0xa90acf67736e3983!8m2!3d36.814303!4d-2.5618535!16s%2Fg%2F1w0p6z_2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Marina El Rompido",
    lat: 37.2178994,
    lng: -7.1278839,
    region: "Andalucía",
    website: "https://puertoelrompido.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Marina+El+Rompido/@37.2178994,-7.1278839,17z/data=!3m1!4b1!4m6!3m5!1s0xd11d3004ff14011:0xe3c77a6f7aa7b76b!8m2!3d37.2178994!4d-7.1278839!16s%2Fg%2F11vzcp1369?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Almerimar",
    lat: 36.6961134,
    lng: -2.7939968,
    region: "Andalucía",
    website: "https://almerimarpuerto.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Almerimar/@36.6961134,-2.7939968,17z/data=!3m1!4b1!4m6!3m5!1s0xd705d99e886f13f:0xe4d7e0c45b6e2964!8m2!3d36.6961134!4d-2.7939968!16s%2Fg%2F120pgskr?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo de Benalmádena",
    lat: 36.594212,
    lng: -4.512339,
    region: "Andalucía",
    website: "https://puertobenalmadena.es",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+de+Benalm%C3%A1dena/@36.594212,-4.512339,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fc6674f5db19:0x4e1a97cb22de871a!8m2!3d36.594212!4d-4.512339!16s%2Fg%2F1233fxcj?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Sherry",
    lat: 36.5788918,
    lng: -6.2758391,
    region: "Andalucía",
    website: "https://puertosherry.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Sherry/@36.5788918,-6.2758391,14z/data=!4m10!1m2!2m1!1sPuerto+Sherry!3m6!1s0xd0dd0321e687e37:0xe85ef7d64537372c!8m2!3d36.5822355!4d-6.2555447!15sCg1QdWVydG8gU2hlcnJ5kgEGbWFyaW5hqgFCCgsvZy8xMjJxeTYwMhABMh4QASIatAhhdni3MhYKv7XkZdhMMuANs6U2TmBxn_syERACIg1wdWVydG8gc2hlcnJ54AEA!16s%2Fg%2F122qy602?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo de Estepona",
    lat: 36.4159657,
    lng: -5.1585576,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+de+Estepona/@36.4159657,-5.1585576,17z/data=!3m1!4b1!4m6!3m5!1s0xd0cd6b3eb5b66d9:0xe4c18628162e85d9!8m2!3d36.4159657!4d-5.1585576!16s%2Fg%2F11gdk_fxyh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Real Club Náutico El Candado",
    lat: 36.7155591,
    lng: -4.3464078,
    region: "Andalucía",
    website: "https://clubelcandado.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+El+Candado/@36.7155591,-4.3464078,17z/data=!3m1!4b1!4m6!3m5!1s0xd7259fab7ae4ec3:0xa8c76909310f98e1!8m2!3d36.7155591!4d-4.3464078!16s%2Fg%2F11fsn3q4_7?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Banús",
    lat: 36.4859378,
    lng: -4.9544317,
    region: "Andalucía",
    website: "https://puerto-banus.com",
    google_maps: "https://www.google.com/maps/place/Banus/@36.4859378,-4.9544317,17z/data=!3m1!4b1!4m6!3m5!1s0xd7329c0f3c27dd5:0xc208325ccef80ed2!8m2!3d36.4859378!4d-4.9544317!16s%2Fg%2F11b807rjlv?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "IGY Málaga Marina",
    lat: 36.7144457,
    lng: -4.4146948,
    region: "Andalucía",
    website: "https://igymarinas.com",
    google_maps: "https://www.google.com/maps/place/IGY+M%C3%A1laga+Marina/@36.7144457,-4.4146948,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f785b1bc1a35:0x8f7a0dc3a9751239!8m2!3d36.7144457!4d-4.4146948!16s%2Fg%2F11q9qdbgq_?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Real Club Náutico Estepona",
    lat: 36.4150616,
    lng: -5.1587685,
    region: "Andalucía",
    website: "https://rcne.es",
    google_maps: "https://www.google.com/maps/place/Real+Club+N%C3%A1utico+de+Estepona/@36.4150616,-5.1587685,17z/data=!3m1!4b1!4m6!3m5!1s0xd0cd6b20e046dd9:0x8164fae27f65886!8m2!3d36.4150616!4d-5.1587685!16s%2Fg%2F113f43q60?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto de San José",
    lat: 36.7624024,
    lng: -2.1027184,
    region: "Andalucía",
    website: "https://clubnauticodesanjose.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+San+Jos%C3%A9/@36.7624024,-2.1027184,17z/data=!3m1!4b1!4m6!3m5!1s0xd7af27f720503d5:0xe3cb3c88d2d5d6e!8m2!3d36.7624024!4d-2.1027184!16s%2Fg%2F11_flddq8?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo de Marbella",
    lat: 36.5060342,
    lng: -4.8901825,
    region: "Andalucía",
    website: "https://puertodeportivo.marbella.es",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+de+Marbella/@36.5060342,-4.8901825,17z/data=!3m1!4b1!4m6!3m5!1s0xd73275b05d54b4b:0x6b16d7247ff6c6a9!8m2!3d36.5060342!4d-4.8901825!16s%2Fg%2F122fpsty?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo de Fuengirola",
    lat: 36.5417052,
    lng: -4.6187153,
    region: "Andalucía",
    website: "https://pdfsam.es",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+Fuengirola,+29640+Fuengirola,+M%C3%A1laga,+Spain/@36.5417052,-4.6187153,17z/data=!3m1!4b1!4m6!3m5!1s0xd72e26a240a708b:0x8cf1a1e50a4b8ba7!8m2!3d36.5417052!4d-4.6187153!16s%2Fg%2F11hcf13czh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto Deportivo de La Duquesa",
    lat: 36.3555117,
    lng: -5.2476293,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+de+la+Duquesa/@36.3555117,-5.2476293,15z/data=!4m10!1m2!2m1!1sPuerto+Deportivo+de+La+Duquesa!3m6!1s0xd0cda8325d8a66b:0x8d35772688fa41b4!8m2!3d36.3555117!4d-5.2296049!15sCh5QdWVydG8gRGVwb3J0aXZvIGRlIExhIER1cXVlc2GSAQZoYXJib3KqAVUKDC9nLzF6NDRiYmQ1MxABMh8QASIbBvpuFBhVKCNR9svNp0KUkZgIsxzWspDqBXA7MiIQAiIecHVlcnRvIGRlcG9ydGl2byBkZSBsYSBkdXF1ZXNh4AEA!16s%2Fg%2F1q5bnk5j3?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Marina del Este",
    lat: 36.7278514,
    lng: -3.7264554,
    region: "Andalucía",
    website: "https://marinasmediterraneo.com",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+Marina+Del+Este/@36.7278514,-3.7264554,17z/data=!3m1!4b1!4m6!3m5!1s0xd71881cbcb9c733:0x3bf5532cf401fa64!8m2!3d36.7278514!4d-3.7264554!16s%2Fg%2F1228ltyr?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Marina Motril",
    lat: 36.7243423,
    lng: -3.5271799,
    region: "Andalucía",
    website: "https://marinamotril.com",
    google_maps: "https://www.google.com/maps/place/Marina+Motril/@36.7243423,-3.5271799,17z/data=!3m1!4b1!4m6!3m5!1s0xd719a712ea193b5:0x1b58857e5d80bad7!8m2!3d36.7243423!4d-3.5271799!16s%2Fg%2F1tdg946c?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Puerto de Sotogrande",
    lat: 36.2869021,
    lng: -5.2745656,
    region: "Andalucía",
    website: "https://puertosotogrande.es",
    google_maps: "https://www.google.com/maps/place/Puerto+Sotogrande+%7C+Puerto+Deportivo/@36.2869021,-5.2745656,16.85z/data=!4m6!3m5!1s0xd0cc4eff391a65d:0xff787710371af97c!8m2!3d36.2884867!4d-5.2698383!16s%2Fg%2F1tfmdh7k?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  }
];
