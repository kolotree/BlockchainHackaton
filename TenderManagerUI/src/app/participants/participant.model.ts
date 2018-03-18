export class Participant {

    $class: String = 'org.example.biznet.Participient';
    participientId: String;
    name: String;

    constructor(id: String, name: String) {
        this.participientId = id;
        this.name = name;
    }
}
