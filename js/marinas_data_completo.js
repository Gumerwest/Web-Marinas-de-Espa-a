const marinasData = [
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
    website: "https://marinasmediterraneo.es/estepona/",
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
    website: "https://marinasmediterraneo.es/duquesa/",
    google_maps: "https://www.google.com/maps/place/Puerto+Deportivo+de+La+Duquesa/@36.3555117,-5.2476293,15z/data=!4m10!1m2!2m1!1sPuerto+Deportivo+de+La+Duquesa!3m6!1s0xd0cda4303840ad9:0xc97718bd0fe00e60!8m2!3d36.3564529!4d-5.2309699!15sCh5QdWVydG8gRGVwb3J0aXZvIGRlIExhIER1cXVlc2FaICIecHVlcnRvIGRlcG9ydGl2byBkZSBsYSBkdXF1ZXNhkgEGbWFyaW5hqgFVCgwvZy8xejQ0YmJkNTMQATIfEAEiGwb6bhQYVSgjUfbLzadClJGYCLMc1rKQ6gVwOzIiEAIiHnB1ZXJ0byBkZXBvcnRpdm8gZGUgbGEgZHVxdWVzYeABAA!16s%2Fg%2F1z44bbd53?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Marina del Este",
    lat: 36.7278514,
    lng: -3.7264554,
    region: "Andalucía",
    website: "https://marinasmediterraneo.es/marina/",
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
  },
  {
    name: "Marina Alboran",
    lat: 39.5632208,
    lng: 2.628243,
    region: "Baleares",
    website: "https://marinaalboran.com",
    google_maps: "https://www.google.com/maps/place/Marina+Alboran/@39.5632208,2.628243,17z/data=!3m1!4b1!4m6!3m5!1s0x1297927329c76da5:0xf1e27c5762a95b17!8m2!3d39.5632208!4d2.628243!16s%2Fg%2F12qgsh0h6?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "MARINA PORT DE MALLORCA",
    lat: 39.5632208,
    lng: 2.628243,
    region: "Baleares",
    website: "https://portdemallorca.com",
    google_maps: "https://www.google.com/maps/place/Marina+Port+De+Mallorca/@39.5632208,2.628243,17z/data=!3m1!4b1!4m6!3m5!1s0x1297927329c76da5:0xf1e27c5762a95b17!8m2!3d39.5632208!4d2.628243!16s%2Fg%2F12qgsh0h6?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Port Esportiu Alcudiamar",
    lat: 39.8381016,
    lng: 3.1308796,
    region: "Baleares",
    website: "https://alcudiamar.es",
    google_maps: "https://www.google.com/maps/place/Port+d%27Alc%C3%BAdia/@39.8381016,3.1308796,17z/data=!4m10!1m2!2m1!1sPort+Esportiu+Alcudiamar!3m6!1s0x12962c8c072ba953:0x841a00335370bbed!8m2!3d39.8381016!4d3.1353857!15sChhQb3J0IEVzcG9ydGl1IEFsY3VkaWFtYXJaGiIYcG9ydCBlc3BvcnRpdSBhbGN1ZGlhbWFykgESdG91cmlzdF9hdHRyYWN0aW9uqgFOCgsvZy8xdl94Nmw1XxABMh8QASIbEJDxiTyxUtoFrxeE_F38rNqwdhhGLe-qroHhMhwQAiIYcG9ydCBlc3BvcnRpdSBhbGN1ZGlhbWFy4AEA!16s%2Fg%2F11cn6ch1cw?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "SERVICIOS TECNICOS PORTUARIOS",
    lat: 39.5641673,
    lng: 2.6218852,
    region: "Baleares",
    website: "https://stp-palma.com",
    google_maps: "https://www.google.com/maps/place/STP+(Servicios+T%C3%A9cnicos+Portuarios)/@39.5641673,2.6218852,15z/data=!4m10!1m2!2m1!1sSERVICIOS+TECNICOS+PORTUARIOS+Baleares!3m6!1s0x12979241eb1f3471:0xa0eb7614d039cbc0!8m2!3d39.5641673!4d2.6399096!15sCiZTRVJWSUNJT1MgVEVDTklDT1MgUE9SVFVBUklPUyBCYWxlYXJlc5IBH3NoaXBidWlsZGluZ19hbmRfcmVwYWlyX2NvbXBhbnmqAXIQASohIh1zZXJ2aWNpb3MgdGVjbmljb3MgcG9ydHVhcmlvcygOMh8QASIb3yHK_K4-oGKLasvascj2cM4B5T5HeCTkwISFMioQAiImc2VydmljaW9zIHRlY25pY29zIHBvcnR1YXJpb3MgYmFsZWFyZXPgAQA!16s%2Fg%2F1hc7h4dhh?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Marina de Bonaire Cocodrilo",
    lat: 39.8652728,
    lng: 3.1410806,
    region: "Baleares",
    website: "https://marinadebonaire.com",
    google_maps: "https://www.google.com/maps/place/Marina+de+Bonaire/@39.8652728,3.1410806,17z/data=!3m1!4b1!4m6!3m5!1s0x12962b83ba7dda8b:0x76dd2858a98413fe!8m2!3d39.8652687!4d3.1436502!16s%2Fg%2F12qg1t8s8?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Marina Tramontana",
    lat: 39.7958189,
    lng: 2.6906655,
    region: "Baleares",
    website: "https://marinatramontana.com",
    google_maps: "https://www.google.com/maps/place/Marina+Tramontana/@39.7958189,2.6906655,17z/data=!3m1!4b1!4m6!3m5!1s0x1297e550af245a91:0xb384fcf1787f044!8m2!3d39.7958148!4d2.6932351!16s%2Fg%2F11p0lsbd7h?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Port Adriano",
    lat: 39.4906449,
    lng: 2.4765844,
    region: "Baleares",
    website: "https://portadriano.com",
    google_maps: "https://www.google.com/maps/place/Port+Adriano/@39.4906449,2.4765844,17z/data=!3m2!4b1!5s0x129788381871c73d:0xba367e7c18ac973d!4m6!3m5!1s0x129789cb7c2d8c63:0xdf78d123d581814d!8m2!3d39.4906408!4d2.479154!16s%2Fg%2F1tg9vqvy?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Moll Vell",
    lat: 39.5665083,
    lng: 2.6391225,
    region: "Baleares",
    website: "https://mollvell.com",
    google_maps: "https://www.google.com/maps/place/Marina+Moll+Vell/@39.5665083,2.6391225,17z/data=!4m10!1m2!2m1!1sMoll+Vell+Baleares!3m6!1s0x12979243898875d1:0xb35e6a5ad39c88f9!8m2!3d39.5665083!4d2.6436286!15sChJNb2xsIFZlbGwgQmFsZWFyZXOSAQZtYXJpbmGqAUkQASoMIghiYWxlYXJlcygOMh8QASIbv9ACNn9BjEBo5O3XzSMZwGy4botPjP0rLrIQMhYQAiISbW9sbCB2ZWxsIGJhbGVhcmVz4AEA!16s%2Fg%2F1td2qf0z?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Pantalan Mediterraneo",
    lat: 39.5621569,
    lng: 2.6267152,
    region: "Baleares",
    website: "https://pantalanmediterraneo.com",
    google_maps: "https://www.google.com/maps/place/Pantal%C3%A1n+del+Mediterr%C3%A1neo/@39.5621569,2.6267152,17z/data=!3m1!4b1!4m6!3m5!1s0x129793ff24b7e0a7:0x8670763b9f395312!8m2!3d39.5621528!4d2.6292848!16s%2Fg%2F11rsftcrpk?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Port Olimpic Calanova",
    lat: 39.5499505,
    lng: 2.5962352,
    region: "Baleares",
    website: "https://portcalanova.com",
    google_maps: "https://www.google.com/maps/place/Port+Calanova/@39.5499505,2.5962352,17z/data=!3m2!4b1!5s0x12978dde9fadcb1b:0x99a7344f04ac3e57!4m6!3m5!1s0x12978ddd5195e9b3:0xfc2fa952bbed7241!8m2!3d39.5499464!4d2.5988048!16s%2Fg%2F1wb44bzz?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "NAUTIC CENTER MENORCA",
    lat: 39.9336983,
    lng: 3.7362535,
    region: "Baleares",
    website: "https://nauticcenter.net",
    google_maps: "https://www.google.com/maps/place/Nautic+Center+Menorca+%7C+Agencia+n%C3%A1utica/@39.9336983,3.7362535,10z/data=!4m10!1m2!2m1!1sNAUTIC+CENTER+MENORCA!3m6!1s0x12958700e3cad6a3:0xa1cff33f82759f3!8m2!3d39.888701!4d4.275436!15sChVOQVVUSUMgQ0VOVEVSIE1FTk9SQ0FaFyIVbmF1dGljIGNlbnRlciBtZW5vcmNhkgELYm9hdF9kZWFsZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUmhiamxNU0daM0VBRaoBURABKhEiDW5hdXRpYyBjZW50ZXIoADIfEAEiG4HpoH6KdabnhKnASXHwU4yFZBibxsoMv64gcDIZEAIiFW5hdXRpYyBjZW50ZXIgbWVub3JjYeABAPoBBAgIECM!16s%2Fg%2F11fmfz5mfy?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "CLUB NAUTIC FORNELLS",
    lat: 40.0402983,
    lng: 4.1216361,
    region: "Baleares",
    website: "https://cnfornells.com",
    google_maps: "https://www.google.com/maps/place/Club+N%C3%A0utic+Fornells/@40.0402983,4.1216361,17z/data=!3m1!4b1!4m6!3m5!1s0x12be218c7e149cb9:0x25e29315bde0e83a!8m2!3d40.0402942!4d4.1242057!16s%2Fg%2F1q5bmbxtr?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Cala'n Bosch",
    lat: 39.9285651,
    lng: 3.8329479,
    region: "Baleares",
    website: "https://puertocalanbosch.com",
    google_maps: "https://www.google.com/maps/place/NEX+GRUPO+-+Servicios+portuarios+y+Alquiler+de+embarcaciones/@39.9285651,3.8329479,17z/data=!3m1!4b1!4m6!3m5!1s0x12be0204d4332521:0xf25976d861be8367!8m2!3d39.9285651!4d3.8329479!16s%2Fg%2F11cn6fqfcq?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Club Nàutic Les Cases d'Alcanar",
    lat: 40.5651,
    lng: 0.5084,
    region: "Cataluña",
    website: "https://clubnauticcasesdalcanar.com",
    google_maps: "https://maps.app.goo.gl/2o7mfMT6jbjZ391e8?g_st=ic"
  },
  {
    name: "Sant Carles Marina",
    lat: 40.6151,
    lng: 0.5884,
    region: "Cataluña",
    website: "https://santcarlesmarina.com",
    google_maps: "https://maps.app.goo.gl/5DoiiDVWdnqJ4DQx5?g_st=ic"
  },
  {
    name: "Port Deltebre - CN Riumar",
    lat: 40.7251,
    lng: 0.7284,
    region: "Cataluña",
    website: "https://cnriumar.com",
    google_maps: "https://maps.app.goo.gl/7eHqYqrHXeQhJmvT7?g_st=ic"
  },
  {
    name: "Port Marina Sant Jordi",
    lat: 40.9651,
    lng: 0.7584,
    region: "Cataluña",
    website: "https://marinasantjordi.com",
    google_maps: "https://maps.app.goo.gl/KAz5t3kahdAFXvfP7?g_st=ic"
  },
  {
    name: "Port Calafat",
    lat: 40.8151,
    lng: 0.6884,
    region: "Cataluña",
    website: "https://portcalafat.com",
    google_maps: "https://maps.app.goo.gl/immSP2jCpiPMzcVW9?g_st=ic"
  },
  {
    name: "Club Nàutic Hospitalet-Vandellòs",
    lat: 40.9851,
    lng: 0.8884,
    region: "Cataluña",
    website: "https://cnhospitalet.com",
    google_maps: "https://maps.app.goo.gl/mQJEY3Y2dnLri3Av9?g_st=ic"
  },
  {
    name: "Club Nàutic Cambrils",
    lat: 41.0651,
    lng: 1.0584,
    region: "Cataluña",
    website: "https://clubnauticcambrils.com",
    google_maps: "https://maps.app.goo.gl/ERA69KwqPjmJGMvz9?g_st=ic"
  },
  {
    name: "Marina Cambrils",
    lat: 41.0651,
    lng: 1.0584,
    region: "Cataluña",
    website: "https://marinacambrils.com",
    google_maps: "https://maps.app.goo.gl/KGsegofLVadrxxTR9?g_st=ic"
  },
  {
    name: "Club Nàutic de Salou",
    lat: 41.0751,
    lng: 1.1384,
    region: "Cataluña",
    website: "https://clubnauticsalou.com",
    google_maps: "https://maps.app.goo.gl/2sZebBwp54zF6jzJ7?g_st=ic"
  },
  {
    name: "Port Tàrraco",
    lat: 41.1151,
    lng: 1.2484,
    region: "Cataluña",
    website: "https://porttarraco.com",
    google_maps: "https://maps.app.goo.gl/QUB9tem6TcKNnqHj6?g_st=ic"
  },
  {
    name: "Club Nàutic Coma-Ruga",
    lat: 41.1851,
    lng: 1.5084,
    region: "Cataluña",
    website: "https://cncomaruga.com",
    google_maps: "https://maps.app.goo.gl/8ok8nonGRqMXVki6A?g_st=ic"
  },
  {
    name: "Port de Segur - Calafell",
    lat: 41.2051,
    lng: 1.5684,
    region: "Cataluña",
    website: "https://portsegurcalafell.com",
    google_maps: "https://maps.app.goo.gl/r5ELhJmRVVchNV9A8?g_st=ic"
  },
  {
    name: "Pendennis Vilanova",
    lat: 41.2251,
    lng: 1.7284,
    region: "Cataluña",
    website: "https://pendennisvilanova.com",
    google_maps: "https://maps.app.goo.gl/9qdETSDy58Fd7sXS8?g_st=ic"
  },
  {
    name: "Club Nàutic Vilanova",
    lat: 41.2251,
    lng: 1.7284,
    region: "Cataluña",
    website: "https://clubnauticvilanova.com",
    google_maps: "https://maps.app.goo.gl/2YirGVaK12D9XDzc9?g_st=ic"
  },
  {
    name: "Port de Sitges-Aiguadolç",
    lat: 41.237,
    lng: 1.805,
    region: "Cataluña",
    website: "https://sitgesaiguadolc.com",
    google_maps: "https://maps.app.goo.gl/iPhUac2C7BN7BN2b9?g_st=ic"
  },
  {
    name: "Club Nàutic Garraf",
    lat: 41.277,
    lng: 1.923,
    region: "Cataluña",
    website: "https://clubnauticgarraf.com",
    google_maps: "https://maps.app.goo.gl/Kn8FVqUtLSGK2xc87?g_st=ic"
  },
  {
    name: "Port Ginesta",
    lat: 41.268,
    lng: 1.918,
    region: "Cataluña",
    website: "https://portginesta.com",
    google_maps: "https://maps.app.goo.gl/Fqd5aYsucrQNmC2p9?g_st=ic"
  },
  {
    name: "Marina Vela Barcelona",
    lat: 41.3851,
    lng: 2.1734,
    region: "Cataluña",
    website: "https://marinavelabarcelona.com",
    google_maps: "https://maps.app.goo.gl/c81yxQ4Aawqs1dcQA?g_st=ic"
  },
  {
    name: "Marina Port Vell",
    lat: 41.3751,
    lng: 2.1834,
    region: "Cataluña",
    website: "https://marinaportvell.com",
    google_maps: "https://maps.app.goo.gl/TEP9HR3jiL9sxEkA6?g_st=ic"
  },
  {
    name: "R. C. Marítim Barcelona",
    lat: 41.3801,
    lng: 2.1884,
    region: "Cataluña",
    website: "https://maritimbarcelona.org",
    google_maps: "https://maps.app.goo.gl/ZU2DCK4t3BuSuiVL9?g_st=ic"
  },
  {
    name: "R. C. Nàutic de Barcelona",
    lat: 41.3801,
    lng: 2.1884,
    region: "Cataluña",
    website: "https://rcnb.com",
    google_maps: "https://maps.app.goo.gl/vvZc89tT6nuJFsYJ9?g_st=ic"
  },
  {
    name: "Marina Port Fòrum",
    lat: 41.4101,
    lng: 2.2234,
    region: "Cataluña",
    website: "https://marinaportforum.com",
    google_maps: "https://maps.app.goo.gl/yge3a8EfrgjDM6Tt9?g_st=ic"
  },
  {
    name: "Port Olímpic BCN",
    lat: 41.3901,
    lng: 2.1984,
    region: "Cataluña",
    website: "https://portolimpic.com",
    google_maps: "https://maps.app.goo.gl/i63vCZQmKTV4WLXF9?g_st=ic"
  },
  {
    name: "Marina Badalona",
    lat: 41.4501,
    lng: 2.2484,
    region: "Cataluña",
    website: "https://marinabadalona.cat",
    google_maps: "https://maps.app.goo.gl/4eufcu4FvkRW7ZVi8?g_st=ic"
  },
  {
    name: "Port de Masnou",
    lat: 41.4801,
    lng: 2.3084,
    region: "Cataluña",
    website: "https://portmasnou.com",
    google_maps: "https://maps.app.goo.gl/uhEiWAUreGNdyMwG6?g_st=ic"
  },
  {
    name: "Marina Port Premià",
    lat: 41.4901,
    lng: 2.3484,
    region: "Cataluña",
    website: "https://marinapremia.com",
    google_maps: "https://maps.app.goo.gl/wuCijjDdbVNyV8ox8?g_st=ic"
  },
  {
    name: "Port de Mataró",
    lat: 41.5301,
    lng: 2.4484,
    region: "Cataluña",
    website: "https://portmataro.cat",
    google_maps: "https://maps.app.goo.gl/9ewrGRzoh1azFuecA?g_st=ic"
  },
  {
    name: "Club Nàutic el Balis",
    lat: 41.5601,
    lng: 2.5084,
    region: "Cataluña",
    website: "https://cnbalis.com",
    google_maps: "https://maps.app.goo.gl/gXCCpxw7vMyMTcoq7?g_st=ic"
  },
  {
    name: "Club Nàutic d'Arenys de Mar",
    lat: 41.5801,
    lng: 2.5484,
    region: "Cataluña",
    website: "https://cnarenys.com",
    google_maps: "https://maps.app.goo.gl/1azVzJGkbhi9vMcJ6?g_st=ic"
  },
  {
    name: "Club de Vela Blanes",
    lat: 41.6751,
    lng: 2.7934,
    region: "Cataluña",
    website: "https://cvblanes.com",
    google_maps: "https://maps.app.goo.gl/Lw1qJ72tnueVoyKn8?g_st=ic"
  },
  {
    name: "Club Nàutic Cala Canyelles",
    lat: 41.7051,
    lng: 2.8234,
    region: "Cataluña",
    website: "https://cncanyellescom",
    google_maps: "https://maps.app.goo.gl/o4fhDraCyn7abp7q8?g_st=ic"
  },
  {
    name: "Club Nàutic Vell",
    lat: 41.7251,
    lng: 2.8434,
    region: "Cataluña",
    website: "https://cnvell.com",
    google_maps: "https://maps.app.goo.gl/RMAmguQ672uMpjkS7?g_st=ic"
  },
  {
    name: "Club Nàutic Sant Feliu de Guíxols",
    lat: 41.7801,
    lng: 3.0334,
    region: "Cataluña",
    website: "https://cnsantfeliu.com",
    google_maps: "https://maps.app.goo.gl/6ZPbvN63Pv3FgiN28?g_st=ic"
  },
  {
    name: "Club Nàutic Port d'Aro",
    lat: 41.8151,
    lng: 3.0684,
    region: "Cataluña",
    website: "https://clubnauticportdaro.cat",
    google_maps: "https://maps.app.goo.gl/tLe57eDGf19gtHyEA?g_st=ic"
  },
  {
    name: "Club Nàutic Costa Brava Palamós",
    lat: 41.8501,
    lng: 3.1284,
    region: "Cataluña",
    website: "https://cncostabrava.com",
    google_maps: "https://maps.app.goo.gl/Cud3bpyq33puAT379?g_st=ic"
  },
  {
    name: "Port Marina Palamós",
    lat: 41.8501,
    lng: 3.1284,
    region: "Cataluña",
    website: "https://marinapalamos.com",
    google_maps: "https://maps.app.goo.gl/Evz7zTh3vCiSxGry8?g_st=ic"
  },
  {
    name: "Club Nàutic de Llafranc",
    lat: 41.8851,
    lng: 3.1884,
    region: "Cataluña",
    website: "https://cnllafranc.com",
    google_maps: "https://maps.app.goo.gl/paTuUfdECb7RYZCg7?g_st=ic"
  },
  {
    name: "Club Nàutic Aiguablava",
    lat: 41.9151,
    lng: 3.2184,
    region: "Cataluña",
    website: "https://clubnauticaiguablava.cat",
    google_maps: "https://maps.app.goo.gl/pw8ZnKCPjQUREQhf9?g_st=ic"
  },
  {
    name: "Club Nàutic Estartit",
    lat: 42.0501,
    lng: 3.2084,
    region: "Cataluña",
    website: "https://cnestartit.com",
    google_maps: "https://maps.app.goo.gl/BAqif8GAW9ikKo46A?g_st=ic"
  },
  {
    name: "Club Nàutic l'Escala",
    lat: 42.1251,
    lng: 3.1384,
    region: "Cataluña",
    website: "https://nauticescala.com",
    google_maps: "https://maps.app.goo.gl/okigXtTAhntBdwY17?g_st=ic"
  },
  {
    name: "Club Nàutic Sant Pere Pescador",
    lat: 42.1851,
    lng: 3.0684,
    region: "Cataluña",
    website: "https://clubnauticsantpere.com",
    google_maps: "https://maps.app.goo.gl/yaGymbNPBawJtMp76?g_st=ic"
  },
  {
    name: "Marina Empuriabrava",
    lat: 42.2451,
    lng: 3.1284,
    region: "Cataluña",
    website: "https://marinaempuriabrava.com",
    google_maps: "https://maps.app.goo.gl/aYvr748vgKvSMDyf9?g_st=ic"
  },
  {
    name: "Port de Roses",
    lat: 42.2601,
    lng: 3.1784,
    region: "Cataluña",
    website: "https://portroses.cat",
    google_maps: "https://maps.app.goo.gl/nFBZE91bpiMuXaYG6?g_st=ic"
  },
  {
    name: "Club Nàutic Port de la Selva",
    lat: 42.3351,
    lng: 3.2084,
    region: "Cataluña",
    website: "https://cnportdelaselva.com",
    google_maps: "https://maps.app.goo.gl/pMRdSn1uhWHEKUSC8?g_st=ic"
  },
  {
    name: "Club Nàutic de Llançà",
    lat: 42.3651,
    lng: 3.2384,
    region: "Cataluña",
    website: "https://cnllanca.cat",
    google_maps: "https://maps.app.goo.gl/x5P3kRcJhNQ7QMJUA?g_st=ic"
  },
  {
    name: "Port de Colera",
    lat: 42.3901,
    lng: 3.1584,
    region: "Cataluña",
    website: "https://portcolera.cat",
    google_maps: "https://maps.app.goo.gl/Rd5V597B6L4XPrST7?g_st=ic"
  },
  {
    name: "Port de Portbou",
    lat: 42.4251,
    lng: 3.1684,
    region: "Cataluña",
    website: "https://portportbou.com",
    google_maps: "https://maps.app.goo.gl/svid7g3xdo9WpyTT8?g_st=ic"
  }
];
