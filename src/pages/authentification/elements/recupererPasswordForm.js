import Button from "./button";
function RecupererPasswordForm() {
    return ( 
        <div className="space-y-6">
  <div className="password">
  <input className="input" name="text" type="number" />
  <input className="input" name="text" type="number" />
  <input className="input" name="text" type="number" />
  <input className="input" name="text" type="number" />
  <input className="input" name="text" type="number" />
  <input className="input" name="text" type="number" />
</div>
<Button title="Envoyer" type="submit"/>
</div>

     );
}

export default RecupererPasswordForm;