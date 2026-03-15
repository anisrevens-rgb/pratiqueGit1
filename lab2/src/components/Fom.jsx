import { useState } from "react";

export default function Form() {
  /*
-formData: obje ki pemet ou stoke done ki soti nan form lan
-nom ak mail: se atribi ki nan input yo, yo dwe ekri menm jan ak pwopriyete obje formData pou ka idantifye vale
-ki soti nan chak input

*/
  const [formData, setFormData] = useState({ nom: "", mail: "" });

  /*
jereChanjman se fonksyon ki pemet siveye evenman kap pase nan input yo
paramet event lan se atrave li menm wap jwenn vale ak ki kote vale a soti ekzakteman
*/
  const jereChanjman = (event) => {
    /*
lew ap update yon state kote vale avan ou toujou bezwenl ou itilize yon fonksyon pou modifye vale yo
nou itilize destriktirasyon pou pran tout done ki tet nan formData deja epi ajoute nouvo yo sou li.
 */
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  /* Fonksyon sa se li ki jere soumisyon form lan
li pran yon paramet event tou ki few konnen ki action ki deklanche fonksyon an
event.PreventDefault(): anpeche paj la aktyalize(Refresh)
 setFormData({ nom: "", mail: "" }): reyinisyalize form lan pou ou lew fin soumet li
*/
  const jereSoumisyon = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ nom: "", mail: "" });
    alert("Done yo soumet ak sikse!");
  };

  return (
    <>
      <form onSubmit={jereSoumisyon}>
        <input
          type="text"
          placeholder="Enter your name"
          name="nom"
          onChange={jereChanjman}
          value={formData.nom}
        />
        <br />
        <input
          type="email"
          placeholder="email@example.com"
          name="mail"
          onChange={jereChanjman}
          value={formData.mail}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}