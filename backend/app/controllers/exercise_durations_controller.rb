class ExerciseDurationsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        exercise_duration = ExerciseDuration.new(exercise_duration_params)
        exercise_duration.date_time = DateTime.now
        exercise_duration.save
        if exercise_duration.valid?
            render json: {exercise_duration: ExerciseDurationSerializer.new(exercise_duration)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def exercise_duration_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
