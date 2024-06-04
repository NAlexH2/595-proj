export default interface ActorStapiResponse {
  uid: string;
  name: string;
  birthName?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  placeOfBirth?: string | null;
  dateOfDeath?: string | null;
  placeOfDeath?: string | null;
  animalPerformer?: boolean;
  audiobookPerformer?: boolean;
  cutPerformer?: boolean;
  disPerformer?: boolean;
  ds9Performer?: boolean;
  entPerformer?: boolean;
  filmPerformer?: boolean;
  ldPerformer?: boolean;
  picPerformer?: boolean;
  proPerformer?: boolean;
  puppeteer?: boolean;
  snwPerformer?: boolean;
  standInPerformer?: boolean;
  stPerformer?: boolean;
  stuntPerformer?: boolean;
  tasPerformer?: boolean;
  tngPerformer?: boolean;
  tosPerformer?: boolean;
  videoGamePerformer?: boolean;
  voicePerformer?: boolean;
  voyPerformer?: boolean;
}
