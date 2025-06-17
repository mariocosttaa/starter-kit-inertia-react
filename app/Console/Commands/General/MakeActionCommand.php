<?php

namespace App\Console\Commands\General;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;

class MakeActionCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:action {name : The name of the action class}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new action class';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Action';

    /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function handle()
    {
        // Get the qualified class name from the input
        $name = $this->qualifyClass($this->getNameInput());

        // Ensure base Actions directory exists
        $actionsDir = app_path('Actions');
        if (! is_dir($actionsDir)) {
            if (! mkdir($actionsDir, 0755)) {
                $this->error('Failed to create Actions directory');

                return false;
            }
        }

        // Get the path for the file
        $path = $this->getPath($name);
        $directory = dirname($path);

        // Create directory structure if it doesn't exist
        if (! is_dir($directory)) {
            if (! mkdir($directory, 0755, true)) {
                $this->error("Failed to create directory: {$directory}");

                return false;
            }
        }

        // Check if file already exists
        if (($this->hasOption('force') && ! $this->option('force')) && $this->alreadyExists($this->getNameInput())) {
            $this->error($this->type.' already exists!');

            return false;
        }

        // Get contents from stub
        $stub = $this->files->get($this->getStub());

        // Replace namespace and class in the stub
        $namespace = $this->getNamespace($name);
        $relativePath = str_replace('App\\Actions\\', '', $namespace);

        $searches = [
            '{{ namespace }}',
            '{{ class }}',
        ];

        $replacements = [
            $namespace === 'App\Actions' ? 'App\Actions' : 'App\Actions\\'.$relativePath,
            class_basename($name),
        ];

        $stub = str_replace($searches, $replacements, $stub);

        // Write the file
        $this->files->put($path, $stub);

        // Format the path for display
        $displayPath = 'app/Actions/'.str_replace('\\', '/', $relativePath).'/'.class_basename($name).'.php';

        // Use output formatting for INFO
        $this->components->info(sprintf('Action [%s] created successfully.', $displayPath));

        return true;
    }

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return __DIR__.'/stubs/action.stub';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Actions';
    }

    /**
     * Get the destination class path.
     *
     * @param  string  $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = Str::replaceFirst($this->rootNamespace(), '', $name);

        return $this->laravel['path'].'/'.str_replace('\\', '/', $name).'.php';
    }
}
