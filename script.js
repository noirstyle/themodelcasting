const grid = document.querySelector("#model-grid");
const profile = document.querySelector("#profile");

function modelCard(model) {
  return `
    <a class="model-card" href="profile.html?id=${model.id}">
      <div class="image-wrap">
        <img src="${model.cover}" alt="${model.name}" loading="lazy"
             onerror="this.src='https://placehold.co/800x1100/eeeeee/111111?text=${encodeURIComponent(model.name)}'">
        <span class="card-index">${model.id.replace("model-", "#")}</span>
      </div>
      <div class="card-info">
        <h2>${model.name}</h2>
        <span>${model.height} / ${model.city}</span>
      </div>
    </a>`;
}

if (grid) {
  grid.innerHTML = models.map(modelCard).join("");
}

if (profile) {
  const id = new URLSearchParams(location.search).get("id");
  const model = models.find(item => item.id === id) || models[0];

  document.title = `${model.name} — NOIR CASTING`;

  profile.innerHTML = `
    <section class="profile-hero">
      <div>
        <p class="eyebrow">MODEL PROFILE / ${model.id}</p>
        <h1>${model.name}</h1>
        <p class="profile-city">${model.city} · Available for casting</p>
      </div>
      <div class="stats">
        <div><strong>${model.height}</strong><span>Boy</span></div>
        <div><strong>${model.weight}</strong><span>Kilo</span></div>
        <div><strong>${model.shoe}</strong><span>Ayakkabı</span></div>
      </div>
    </section>

    <section class="details-layout">
      <div class="details">
        <h3>Model bilgileri</h3>
        <p><span>Ölçüler</span>${model.measurements}</p>
        <p><span>Saç</span>${model.hair}</p>
        <p><span>Göz</span>${model.eyes}</p>
        <p><span>Şehir</span>${model.city}</p>
      </div>
      <div class="photo-grid">
        ${model.photos.map((photo, index) => `
          <figure>
            <img src="${photo}" alt="${model.name} fotoğraf ${index + 1}" loading="lazy"
                 onerror="this.src='https://placehold.co/900x1200/eeeeee/111111?text=${encodeURIComponent(model.name + ' / ' + (index+1))}'">
            <figcaption>${String(index + 1).padStart(2, "0")} / ${model.name}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>`;
}
