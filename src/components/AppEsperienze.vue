<template>
<section class="esperienze py-5">
    <div class="container p-5 rounded">
        <div class="row">
            <h1 class="mb-4">Esperienze</h1>
            <div class="col-12 mb-4">
                <h2>BOOLEAN</h2>
                <h5>JR FULL-STACK WEB DEVELOPER TRAINEE</h5>
                <h6>Gennaio | Luglio 2024</h6>
                <p>Il corso intensivo di Full Stack Web Developer mi ha permesso di acquisire competenze approfondite sia nello sviluppo front end che back end. Ho partecipato a lezioni teoriche, esercitazioni pratiche e progetti reali che mi hanno preparato a sviluppare applicazioni web complete e performanti.</p>

                <div>
                    <p><strong>Front End Development:</strong></p>
                    <ul>
                        <li><span>HTML5 & CSS3</span>: Creazione di layout responsivi e ottimizzati per vari dispositivi, utilizzo di framework come Bootstrap per velocizzare lo sviluppo.</li>
                        <li><span>JavaScript</span>: Sviluppo di funzionalità interattive, gestione del DOM e manipolazione di eventi.</li>
                        <li><span>Librerie e Frameworks</span>: Utilizzo di Vue.js per la creazione di interfacce utente dinamiche e modulari.</li>
                        <li><span>Responsive Design</span>: Tecniche per garantire una user experience ottimale su dispositivi mobili e desktop.</li>
                    </ul>
                </div>

                <div>
                    <p><strong>Back End Development:</strong></p>
                    <ul>
                        <li><span>PHP</span>: Sviluppo di applicazioni web dinamiche utilizzando PHP.</li>
                        <li><span>Laravel</span>: Utilizzo del framework Laravel per lo sviluppo rapido di applicazioni, gestione di routing, middleware e servizi RESTful.</li>
                        <li><span>Database</span>: Progettazione e gestione di database relazionali con MySQL, utilizzo di Eloquent ORM per l'interazione con il database.</li>
                        <li><span>API Development</span>: Creazione e gestione di API RESTful per la comunicazione tra front end e back end.</li>
                        <li><span>Autenticazione e Sicurezza</span>: Implementazione di sistemi di autenticazione e autorizzazione, protezione delle applicazioni contro vulnerabilità comuni.</li>
                    </ul>
                </div>

            </div>
            <div class="col-12">
                <h2>CARPISA - DESIGUAL - ALCOTT</h2>
                <h5>COMMESSA</h5>
                <h6>2016 | 2022</h6>
                <p>
                    Grazie a questo lavoro ho maturato competenze nel <strong>lavoro in team</strong>,
                    raggiungendo gli obiettivi prefissati e assegnatoci rispettandone le
                    scadenze. Inoltre, ho sviluppato una capacità comunicativa
                    efficace, dove sono stata in grado di comunicare in modo chiaro,
                    preciso e veloce, rispondendo e soddisfacendo specifiche richieste
                    della clientela.
                </p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.esperienze{

    .container{
        width: 80%;
        background-color: #ae999a7e;

        .row{
            h2{
                color: var(--main-color);
            }

            ul{
                list-style:circle;
                
                span{
                    font-weight: 500;
                }
            }
        }
    }
}

</style>