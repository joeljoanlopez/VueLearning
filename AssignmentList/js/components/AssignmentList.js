import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: {Assignment, AssignmentTags, Panel},

    template: `
        <Panel v-show="show && assignments.length" class="w-70">
            <template #heading>
                <div class="flex justify-between items-start">
                    <div>
                        {{ title }}
                        <span>({{assignments.length}})</span>
                    </div>
                    
                    <button v-show="canToggle" @click="show = false">&times;</button>
                </div>           
            </template>
           

            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)" 
                v-model:currentTag="currentTag"
            />
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                />
            </ul>
            
            <slot></slot>
        </Panel> 
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        },
    },

    data(){
        return{
            currentTag: "All",
            show: true
        };
    },

    computed: {
        filteredAssignments() {
            if (!this.currentTag || this.currentTag === 'All') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}