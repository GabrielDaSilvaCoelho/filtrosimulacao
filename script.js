const DB = [
  {id:1,  id_batch:'B0041768437139', formula:'KETCHUP HEINZ TRADICIONAL',  ingrediente:'TOMATE EM PO',      codigo:'4050034502800', lote:'LT2025K01',  responsavel:'TRIADE', data:'2026-01-14 09:24:35', validade:'2026-02-14', pesagem:55.000, obs:'NAO ALERGENICO'},
  {id:2,  id_batch:'B0041768437140', formula:'KETCHUP HEINZ TRADICIONAL',  ingrediente:'ACUCAR REFINADO',   codigo:'4050034502807', lote:'LT2025K01',  responsavel:'TRIADE', data:'2026-01-14 15:45:00', validade:'2026-02-14', pesagem:8.500,  obs:'NAO ALERGENICO'},
  {id:3,  id_batch:'B0041768437141', formula:'KETCHUP HEINZ TRADICIONAL',  ingrediente:'SAL MARINHO',       codigo:'4050034502808', lote:'LT2025K01',  responsavel:'TRIADE', data:'2026-01-14 23:10:00', validade:'2026-02-14', pesagem:12.000, obs:'NAO ALERGENICO'},
  {id:4,  id_batch:'B0041768437142', formula:'KETCHUP CURRY',              ingrediente:'CURRY EM PO',       codigo:'4050034502804', lote:'LT2025K02',  responsavel:'TRIADE', data:'2026-01-15 07:30:00', validade:'2026-03-15', pesagem:6.200,  obs:'NAO ALERGENICO'},
  {id:5,  id_batch:'B0041768437143', formula:'KETCHUP CURRY',              ingrediente:'PAPRICA DEFUMADA',  codigo:'4050034502802', lote:'LT2025K02',  responsavel:'TRIADE', data:'2026-01-15 16:55:00', validade:'2026-03-15', pesagem:20.000, obs:'NAO ALERGENICO'},
  {id:6,  id_batch:'B0041768437144', formula:'KETCHUP CURRY',              ingrediente:'CEBOLA EM PO',      codigo:'4050034502801', lote:'LT2025K02',  responsavel:'TRIADE', data:'2026-01-15 22:50:00', validade:'2026-03-15', pesagem:9.750,  obs:'NAO ALERGENICO'},
  {id:7,  id_batch:'B0041768437145', formula:'KETCHUP PICANTE',            ingrediente:'PIMENTA CAIENA',    codigo:'4050034502806', lote:'LT2025K03',  responsavel:'TRIADE', data:'2026-01-16 09:00:00', validade:'2026-04-16', pesagem:3.300,  obs:'NAO ALERGENICO'},
  {id:8,  id_batch:'B0041768437146', formula:'KETCHUP PICANTE',            ingrediente:'PIMENTA DO REINO',  codigo:'4050034502817', lote:'LT2025K03',  responsavel:'TRIADE', data:'2026-01-16 14:30:00', validade:'2026-04-16', pesagem:4.100,  obs:'NAO ALERGENICO'},
  {id:9,  id_batch:'B0041768437147', formula:'KETCHUP PICANTE',            ingrediente:'ALHO EM PO',        codigo:'4050034502803', lote:'LT2025K03',  responsavel:'TRIADE', data:'2026-01-16 03:15:00', validade:'2026-04-16', pesagem:5.800,  obs:'NAO ALERGENICO'},
  {id:10, id_batch:'B0041768437148', formula:'KETCHUP BK',                 ingrediente:'TOMATE EM PO',      codigo:'4050034502800', lote:'LT2025K04',  responsavel:'TRIADE', data:'2026-01-17 08:00:00', validade:'2026-05-17', pesagem:48.000, obs:'NAO ALERGENICO'},
  {id:11, id_batch:'B0041768437149', formula:'KETCHUP BK',                 ingrediente:'VINAGRE DE MACA',   codigo:'4050034502809', lote:'LT2025K04',  responsavel:'TRIADE', data:'2026-01-17 18:30:00', validade:'2026-05-17', pesagem:22.000, obs:'NAO ALERGENICO'},
  {id:12, id_batch:'B0041768437150', formula:'KETCHUP BK',                 ingrediente:'ACUCAR REFINADO',   codigo:'4050034502807', lote:'LT2025K04',  responsavel:'TRIADE', data:'2026-01-17 23:45:00', validade:'2026-05-17', pesagem:18.000, obs:'NAO ALERGENICO'},
  {id:13, id_batch:'B0041768437151', formula:'MOSTARDA HEINZ TRADICIONAL', ingrediente:'MOSTARDA EM GRAO',  codigo:'4050034502805', lote:'LT2025M01',  responsavel:'TRIADE', data:'2026-01-18 06:30:00', validade:'2026-04-18', pesagem:14.000, obs:'ALERGENICO - MOSTARDA'},
  {id:14, id_batch:'B0041768437152', formula:'MOSTARDA HEINZ TRADICIONAL', ingrediente:'VINAGRE DE MACA',   codigo:'4050034502809', lote:'LT2025M01',  responsavel:'TRIADE', data:'2026-01-18 15:20:00', validade:'2026-04-18', pesagem:7.000,  obs:'NAO ALERGENICO'},
  {id:15, id_batch:'B0041768437153', formula:'MOSTARDA HEINZ TRADICIONAL', ingrediente:'SAL MARINHO',       codigo:'4050034502808', lote:'LT2025M01',  responsavel:'TRIADE', data:'2026-01-18 22:40:00', validade:'2026-04-18', pesagem:4.500,  obs:'NAO ALERGENICO'},
  {id:16, id_batch:'B0041768437154', formula:'MOSTARDA DIJON',             ingrediente:'MOSTARDA EM GRAO',  codigo:'4050034502805', lote:'LT2025M02',  responsavel:'TRIADE', data:'2026-01-19 07:00:00', validade:'2026-05-19', pesagem:10.000, obs:'ALERGENICO - MOSTARDA'},
  {id:17, id_batch:'B0041768437155', formula:'MOSTARDA DIJON',             ingrediente:'VINHO BRANCO EM PO',codigo:'4050034502820', lote:'LT2025M02',  responsavel:'TRIADE', data:'2026-01-19 17:30:00', validade:'2026-05-19', pesagem:15.000, obs:'NAO ALERGENICO'},
  {id:18, id_batch:'B0041768437156', formula:'MOSTARDA DIJON',             ingrediente:'ALHO EM PO',        codigo:'4050034502801', lote:'LT2025M02',  responsavel:'TRIADE', data:'2026-01-19 01:00:00', validade:'2026-05-19', pesagem:6.500,  obs:'NAO ALERGENICO'},
  {id:19, id_batch:'B0041768437157', formula:'MOSTARDA PICANTE',           ingrediente:'MOSTARDA EM GRAO',  codigo:'4050034502805', lote:'LT2025M03',  responsavel:'TRIADE', data:'2026-01-20 10:00:00', validade:'2026-05-20', pesagem:12.000, obs:'ALERGENICO - MOSTARDA'},
  {id:20, id_batch:'B0041768437158', formula:'MOSTARDA PICANTE',           ingrediente:'PIMENTA CAIENA',    codigo:'4050034502806', lote:'LT2025M03',  responsavel:'TRIADE', data:'2026-01-20 20:30:00', validade:'2026-05-20', pesagem:2.500,  obs:'NAO ALERGENICO'},
  {id:21, id_batch:'B0041768437159', formula:'MOSTARDA PICANTE',           ingrediente:'PAPRICA DEFUMADA',  codigo:'4050034502802', lote:'LT2025M03',  responsavel:'TRIADE', data:'2026-01-20 04:00:00', validade:'2026-05-20', pesagem:3.800,  obs:'NAO ALERGENICO'},
  {id:22, id_batch:'B0041768437160', formula:'MAIONESE HEINZ TRADICIONAL', ingrediente:'OLEO DE SOJA',      codigo:'4050034502812', lote:'LT2025MA01', responsavel:'TRIADE', data:'2026-01-21 08:15:00', validade:'2026-04-21', pesagem:40.000, obs:'NAO ALERGENICO'},
  {id:23, id_batch:'B0041768437161', formula:'MAIONESE HEINZ TRADICIONAL', ingrediente:'OVO EM PO',         codigo:'4050034502821', lote:'LT2025MA01', responsavel:'TRIADE', data:'2026-01-21 16:00:00', validade:'2026-04-21', pesagem:7.000,  obs:'ALERGENICO - OVO'},
  {id:24, id_batch:'B0041768437162', formula:'MAIONESE HEINZ TRADICIONAL', ingrediente:'VINAGRE DE MACA',   codigo:'4050034502809', lote:'LT2025MA01', responsavel:'TRIADE', data:'2026-01-21 23:30:00', validade:'2026-04-21', pesagem:5.000,  obs:'NAO ALERGENICO'},
  {id:25, id_batch:'B0041768437163', formula:'MAIONESE DEFUMADA',          ingrediente:'PAPRICA DEFUMADA',  codigo:'4050034502802', lote:'LT2025MA02', responsavel:'TRIADE', data:'2026-01-22 07:00:00', validade:'2026-05-22', pesagem:18.500, obs:'NAO ALERGENICO'},
  {id:26, id_batch:'B0041768437164', formula:'MAIONESE DEFUMADA',          ingrediente:'OLEO DE SOJA',      codigo:'4050034502812', lote:'LT2025MA02', responsavel:'TRIADE', data:'2026-01-22 19:30:00', validade:'2026-05-22', pesagem:35.000, obs:'NAO ALERGENICO'},
  {id:27, id_batch:'B0041768437165', formula:'MAIONESE DEFUMADA',          ingrediente:'OVO EM PO',         codigo:'4050034502821', lote:'LT2025MA02', responsavel:'TRIADE', data:'2026-01-22 02:00:00', validade:'2026-05-22', pesagem:6.500,  obs:'ALERGENICO - OVO'},
  {id:28, id_batch:'B0041768437166', formula:'BARBECUE HEINZ TRADICIONAL', ingrediente:'ACUCAR MASCAVO',    codigo:'4050034502822', lote:'LT2025B01',  responsavel:'TRIADE', data:'2026-01-23 11:00:00', validade:'2026-06-23', pesagem:20.000, obs:'NAO ALERGENICO'},
  {id:29, id_batch:'B0041768437167', formula:'BARBECUE HEINZ TRADICIONAL', ingrediente:'FUMACA EM PO',      codigo:'4050034502823', lote:'LT2025B01',  responsavel:'TRIADE', data:'2026-01-23 21:00:00', validade:'2026-06-23', pesagem:5.000,  obs:'NAO ALERGENICO'},
  {id:30, id_batch:'B0041768437168', formula:'BARBECUE HEINZ TRADICIONAL', ingrediente:'MELACO EM PO',      codigo:'4050034502824', lote:'LT2025B01',  responsavel:'TRIADE', data:'2026-01-23 03:30:00', validade:'2026-06-23', pesagem:8.000,  obs:'NAO ALERGENICO'},
  {id:31, id_batch:'B0041768437169', formula:'BARBECUE PICANTE',           ingrediente:'PIMENTA CAIENA',    codigo:'4050034502806', lote:'LT2025B02',  responsavel:'TRIADE', data:'2026-01-24 13:00:00', validade:'2026-06-24', pesagem:3.000,  obs:'NAO ALERGENICO'},
  {id:32, id_batch:'B0041768437170', formula:'BARBECUE PICANTE',           ingrediente:'PAPRICA DEFUMADA',  codigo:'4050034502802', lote:'LT2025B02',  responsavel:'TRIADE', data:'2026-01-24 18:30:00', validade:'2026-06-24', pesagem:7.000,  obs:'NAO ALERGENICO'},
  {id:33, id_batch:'B0041768437171', formula:'BARBECUE PICANTE',           ingrediente:'ACUCAR MASCAVO',    codigo:'4050034502822', lote:'LT2025B02',  responsavel:'TRIADE', data:'2026-01-24 00:45:00', validade:'2026-06-24', pesagem:18.000, obs:'NAO ALERGENICO'}
];

let filtered = [...DB];
let page = 1;
let PER_PAGE = 10;

function unique(key) {
  return [...new Set(DB.map(item => item[key]))].sort();
}

function populateSelect(id, values) {
  const select = document.getElementById(id);
  values.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

populateSelect('f-formula', unique('formula'));
populateSelect('f-ingrediente', unique('ingrediente'));
populateSelect('f-responsavel', unique('responsavel'));

function updateClock() {
  document.getElementById('clock').textContent =
    new Date().toLocaleString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
}
updateClock();
setInterval(updateClock, 1000);

function getTurno(dataStr) {
  // dataStr: '2026-01-14 09:24:35'
  const parts = dataStr.split(' ');
  if (!parts[1]) return null;
  const [h, m] = parts[1].split(':').map(Number);
  const total = h * 60 + m;
  // Turno 1: 06:30–14:29  (390–869)
  if (total >= 390 && total <= 869) return '1';
  // Turno 2: 14:30–22:29  (870–1349)
  if (total >= 870 && total <= 1349) return '2';
  // Turno 3: 22:30–06:29  (1350–1439 ou 0–389)
  return '3';
}


function applyFilters() {
  const formula = document.getElementById('f-formula').value;
  const ingrediente = document.getElementById('f-ingrediente').value;
  const responsavel = document.getElementById('f-responsavel').value;
  const lote = document.getElementById('f-lote').value.trim().toUpperCase();
  const batch = document.getElementById('f-batch').value.trim().toUpperCase();
  const alerg = document.getElementById('f-alerg').value;
  const turno   = document.getElementById('f-turno').value;
  const horaDE  = document.getElementById('f-hora-de').value;   // ex: "09:00"
  const horaATE = document.getElementById('f-hora-ate').value;  // ex: "14:00"
  const valDe  = document.getElementById('f-val-de').value;   // data de fabricação (criação)
  const valAte = document.getElementById('f-val-ate').value;   // data de validade (vencimento)

  filtered = DB.filter(item => {
    if (formula && item.formula !== formula) return false;
    if (ingrediente && item.ingrediente !== ingrediente) return false;
    if (responsavel && item.responsavel !== responsavel) return false;
    if (lote && !item.lote.includes(lote)) return false;
    if (batch && !item.id_batch.includes(batch)) return false;
    const isAlergenico = item.obs.startsWith('ALERGENICO');
    if (alerg === 'alergenico' && !isAlergenico) return false;
    if (alerg === 'nao' && isAlergenico) return false;
    if (turno && getTurno(item.data) !== turno) return false;
    // Hora da fabricação — datetime-local retorna "2026-01-14T09:00", data do item é "2026-01-14 09:24:35"
    const itemDT = item.data.slice(0, 16).replace(' ', 'T'); // "2026-01-14T09:24"
    if (horaDE  && itemDT < horaDE)  return false;
    if (horaATE && itemDT > horaATE) return false;
    // "De" filtra pela data de fabricação (criação) — maior ou igual
    if (valDe  && item.data.slice(0, 10) < valDe)  return false;
    // "Até" filtra pela data de validade (vencimento) — menor ou igual
    if (valAte && item.validade > valAte)            return false;
    return true;
  });
  page = 1;
  render();
}

function clearFilters() {
  ['f-formula','f-ingrediente','f-responsavel','f-alerg','f-lote','f-batch','f-turno','f-hora-de','f-hora-ate','f-val-de','f-val-ate']
    .forEach(id => { document.getElementById(id).value = ''; });
  filtered = [...DB];
  page = 1;
  render();
}

function changePerPage() {
  PER_PAGE = parseInt(document.getElementById('per-page-select').value);
  page = 1;
  render();
}

function render() {
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const visibleRows = filtered.slice(start, start + PER_PAGE);

  const alergCount = filtered.filter(item => item.obs.startsWith('ALERGENICO')).length;
  const naoCount = total - alergCount;

  document.getElementById('st-total').textContent = total;
  document.getElementById('st-alerg').textContent = alergCount;
  document.getElementById('st-nao').textContent = naoCount;

  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  if (visibleRows.length === 0) {
    document.getElementById('empty').style.display = 'block';
    document.querySelector('.table-scroll table').style.display = 'none';
  } else {
    document.getElementById('empty').style.display = 'none';
    document.querySelector('.table-scroll table').style.display = '';

    visibleRows.forEach((item, index) => {
      const isAlergenico = item.obs.startsWith('ALERGENICO');
      const badgeHtml = isAlergenico
        ? `<span class="badge badge-alergenico">Alérgênico</span>`
        : `<span class="badge badge-nao">Não Alérgênico</span>`;

      tbody.insertAdjacentHTML('beforeend', `
        <tr>
          <td>${start + index + 1}</td>
          <td>${item.id_batch}</td>
          <td>${item.formula}</td>
          <td>${item.ingrediente}</td>
          <td>${item.codigo}</td>
          <td>${item.lote}</td>
          <td>${formatDate(item.data.slice(0,10))}</td>
          <td>${formatDate(item.validade)}</td>
          <td>${item.pesagem.toFixed(3)}</td>
          <td>${badgeHtml}</td>
          <td>${item.responsavel}</td>
        </tr>
      `);
    });
  }

  // Pagination numbers
  const pageNums = document.getElementById('page-numbers');
  pageNums.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const span = document.createElement('span');
    span.className = 'page-num' + (i === page ? ' active' : '');
    span.textContent = i;
    span.onclick = () => { page = i; render(); };
    pageNums.appendChild(span);
  }

  document.getElementById('btn-prev').disabled = page <= 1;
  document.getElementById('btn-next').disabled = page >= totalPages;
}

function changePage(direction) {
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  page = Math.min(Math.max(1, page + direction), totalPages);
  render();
}

function formatDate(date) {
  return date.split('-').reverse().join('/');
}

function exportCSV() {
  const header = ['ID_BATCH','FORMULA','INGREDIENTE','CODIGO','LOTE','RESPONSAVEL','DATA_FABRICACAO','VALIDADE','PESAGEM_KG','STATUS'];
  const rows = filtered.map(item => [
    item.id_batch, item.formula, item.ingrediente, item.codigo,
    item.lote, item.responsavel, item.data, item.validade,
    item.pesagem.toFixed(3), item.obs
  ]);
  const csv = [header, ...rows].map(row => row.join(';')).join('\n');
  const link = document.createElement('a');
  link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent('\ufeff' + csv);
  link.download = 'fracionamentos_triade.csv';
  link.click();
}

render();
