class StepsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        steps = Step.new(steps_params)
        steps.date_time = DateTime.now
        steps.save
        if steps.valid?
            render json: {steps: StepSerializer.new(steps)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def steps_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
