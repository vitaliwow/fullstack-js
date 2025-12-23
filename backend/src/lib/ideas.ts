import _ from "lodash";


export const ideas = _.times(100).map((i) => ({
    id_: i,
    name: `Idea ${i}`,
    description: `This is the description for Idea ${i}.`,
    text: _.times(100).map((j) => `<p>This is paragraph ${j} of idea ${i}.</p>`).join(""),
}));
