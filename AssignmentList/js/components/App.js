import Assignments from "./Assignments.js";
import Card from "./Panel.js";

export default {
    components: { Assignments, Card },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            <card>
            <template v-slot:heading>
                this is the heading
            </template> 
              This is the default slot.
            </card>
        </div>
           
    `,
}