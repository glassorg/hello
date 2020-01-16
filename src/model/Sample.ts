import Model from "@glas/platform/data/Model"

@Model.class()
export default class Sample extends Model {

    @Model.property({ type: "string", minLength: 1, maxLength: 100 })
    name!: string

}