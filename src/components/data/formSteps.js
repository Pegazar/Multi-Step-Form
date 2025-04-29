import PersonalInfoForm from "../steps/PersonalInfoForm";
import PlanSelectionForm from "../steps/PlanSelectionForm";
import AddOnsForm from "../steps/AddOnsForm";
import SummaryForm from "../steps/SummaryForm";

const formSteps = [
  { id: 1, title: "YOUR INFO", component: PersonalInfoForm },
  { id: 2, title: "SELECT PLAN", component: PlanSelectionForm },
  { id: 3, title: "ADD-ONS", component: AddOnsForm },
  { id: 4, title: "SUMMARY", component: SummaryForm }
];

export default formSteps;