<script lang="ts">
    let number = $state(1);
    let inputFiles:FileList|undefined= $state();
    function showFiles() {
        if (inputFiles === undefined) {
            console.warn("I tried to show files but there were none")
        } else {
            console.log(inputFiles)
        }
    }
</script>



<h1>Wilkommen beim Studienplaner der Studierendenvertretung</h1>

<input bind:files={inputFiles} id="pdf-upload" accept="application/pdf" type="file">
<label for="pdf-upload"><br>Upload Records PDF</label>

<h2>File Contents</h2>
<p>Hi</p>
<button onclick={showFiles}>HI</button>