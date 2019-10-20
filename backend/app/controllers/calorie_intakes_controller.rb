class CalorieIntakesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        calorie_intake = CalorieIntake.new(calorie_intake_params)
        calorie_intake.date_time = DateTime.now
        calorie_intake.save
        if calorie_intake.valid?
            render json: {calorie_intake: CalorieIntakeSerializer.new(calorie_intake)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def calorie_intake_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
